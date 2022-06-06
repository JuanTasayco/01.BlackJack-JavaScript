const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {


    mode:"production",
    

    output: {

        clean: true,
        filename: "[name].js"

    },


    module: {

        rules:[ {

            test: /\.html$/,
            loader: "html-loader",
            options:{


                sources:false,
            },


        },



        {

        test: /\.css$/,
        exclude: /styles.css$/ ,
        use: ["style-loader", "css-loader"],


        },

        {
    
        test: /styles.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],

        },


    
        {
            test: /\.(png|jpe?g|gif)$/,
            use: [
              {
                loader: 'file-loader',

                options:{

                },

              },
            ],


          },



          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }


        ],

    },



    optimization : {

        minimize: true,
        minimizer : [

            new CssMinimizerPlugin(),
            new TerserPlugin(),

        ]


    },



    plugins: [

        new HtmlWebpackPlugin({

            title:"my app",
            template: "./src/index.html"

        }),


        new MiniCssExtractPlugin({

            filename: "[name].css",
            ignoreOrder:false


        }),


        new CopyPlugin({
          patterns: [
            { from: "src/library/", to: "library/" },
            { from: "src/assets/", to: "assets/" },           
          ],
        }),
      
    ]




}