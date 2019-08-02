class TreeWithDfs {
    private edges : Array<{ first: number, second: number }> = [];

    setConnection(from: number, to: number): void{
        if (from === to) {
            throw Error('No loops in the graph!');
        }
        this.edges.push({ first: from, second: to });
    };

    depthFirst(startNode: number, condition?: number): Array<number> {
        const result : Array<number> = [];
        const visited = new Map();       
        const dfs = (v: number) => {
            if (v === condition) {
                console.log(`This V satisfies the condition: ${v}`);
                return;
            }
            result.push(v);
            visited.set(v, true);
            this.edges.filter(edge => {
                const from = edge.first;
                return from === v;
            }).forEach(edge => {
                const to = edge.second;
                if (!visited.has(to)) {
                    dfs(to);
                }
            });
        }
        dfs(startNode);
        return result;
    };
};

const treeDfs = new TreeWithDfs();

treeDfs.setConnection(1, 2);
treeDfs.setConnection(2, 6);
treeDfs.setConnection(1, 3);
treeDfs.setConnection(1, 4);
treeDfs.setConnection(1, 5);
treeDfs.setConnection(3, 7);
treeDfs.setConnection(4, 8);
treeDfs.setConnection(4, 9); 

console.log(treeDfs.depthFirst(1));