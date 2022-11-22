import { VariableSizeTree as Tree } from 'react-vtree';
import { TreeView, TreeItem } from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { defaultNodes } from './utils';

// Tree component can work with any possible tree structure because it uses an
// iterator function that the user provides. Structure, approach, and iterator
// function below is just one of many possible variants.
const tree = {
    name: 'Root #1',
    id: 'root-1',
    children: [
        {
            children: [
                { id: 'child-2', name: 'Child #2' },
                { id: 'child-3', name: 'Child #3' }, { id: 'child-2', name: 'Child #2' },
                { id: 'child-3', name: 'Child #3' }, { id: 'child-2', name: 'Child #2' },
                { id: 'child-3', name: 'Child #3' }, { id: 'child-2', name: 'Child #2' },
                { id: 'child-3', name: 'Child #3' }, { id: 'child-2', name: 'Child #2' },
                { id: 'child-3', name: 'Child #3' }, { id: 'child-2', name: 'Child #2' },
                { id: 'child-3', name: 'Child #3' }, { id: 'child-2', name: 'Child #2' },
                { id: 'child-3', name: 'Child #3' }, { id: 'child-2', name: 'Child #2' },
                { id: 'child-3', name: 'Child #3' },
            ],
            id: 'child-1',
            name: 'Child #1',
        },
        {
            children: [
                { id: 'child-5', name: 'Child #5' },
                { id: 'child-6', name: 'Child #6' },
                { id: 'child-7', name: 'Child #7' }, { id: 'child-5', name: 'Child #5' },
                { id: 'child-6', name: 'Child #6' },
                { id: 'child-7', name: 'Child #7' }, { id: 'child-5', name: 'Child #5' },
                { id: 'child-6', name: 'Child #6' },
                { id: 'child-7', name: 'Child #7' }, { id: 'child-5', name: 'Child #5' },
                { id: 'child-6', name: 'Child #6' },
                { id: 'child-7', name: 'Child #7' }, { id: 'child-5', name: 'Child #5' },
                { id: 'child-6', name: 'Child #6' },
                { id: 'child-7', name: 'Child #7' }, { id: 'child-5', name: 'Child #5' },
                { id: 'child-6', name: 'Child #6' },
                { id: 'child-7', name: 'Child #7' }, { id: 'child-5', name: 'Child #5' },
                { id: 'child-6', name: 'Child #6' },
                { id: 'child-7', name: 'Child #7' }, { id: 'child-5', name: 'Child #5' },
                { id: 'child-6', name: 'Child #6' },
                { id: 'child-7', name: 'Child #7' },
            ],
            id: 'child-4',
            name: 'Child #4',
        },
    ],
};

function* treeWalker(refresh) {
    const stack = [];

    stack.push({
        nestingLevel: 0,
        node: tree,
    });

    while (stack.length !== 0) {
        const {
            node: { children = [], id, name },
            nestingLevel,
        } = stack.pop();

        const isOpened = yield refresh
            ? {
                // The only difference VariableSizeTree `treeWalker` has comparing to
                // the FixedSizeTree is the `defaultHeight` property in the data
                // object.
                defaultHeight: 40,
                id,
                isLeaf: children.length === 0,
                isOpenByDefault: true,
                name,
                nestingLevel,
            }
            : id;

        if (children.length !== 0 && isOpened) {
            for (let i = children.length - 1; i >= 0; i--) {
                stack.push({
                    nestingLevel: nestingLevel + 1,
                    node: children[i],
                });
            }
        }
    }
}


// Node component receives current node height as a prop
const Node = ({ data: { isLeaf, name }, height, isOpen, style, toggle }) => (
    <>
        <div style={style}>
        {!isLeaf && (
            <button type="button" onClick={toggle}>
                {isOpen ? '-' : '+'}
            </button>
        )}
        <div>{name}</div>
        </div>

        {/* <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflow: 'hidden' }}
        >
            <TreeItem nodeId="1" label="Applications">
                <TreeItem nodeId="2" label="Calendar" />
            </TreeItem>
            <TreeItem nodeId="5" label="Documents">
                <TreeItem nodeId="10" label="OSS" />
                <TreeItem nodeId="6" label="MUI">
                    <TreeItem nodeId="8" label="index.js" />
                </TreeItem>
            </TreeItem>
        </TreeView> */}
    </>
);

const VtreeExample = () => (
    
    <Tree treeWalker={treeWalker} height={500} width={600}>
        {Node}
    </Tree>
);

export default VtreeExample