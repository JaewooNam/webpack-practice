import path from 'path'

export default {
  entry: './src/test.js', // file to build
  output: { // If finished building, create file through this info
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/build')
  },
  mode: 'none' // build option (production(optimized), development(fast), none)
}
