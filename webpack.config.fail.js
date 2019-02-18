
module.exports = {
    mode: 'development', 
    entry: './src/index',
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: { 
        rules: [
            {   
                test: /\.tsx?$/, 
                loader: "ts-loader", 
                options: { configFile: "tsconfig.fail.json" }  
            },
        ]
    }
};
