const { ApolloServer } =require("@apollo/server")
const { startStandaloneServer } =require( "@apollo/server/standalone")
const  {expressMiddleware} = require( "@apollo/server/express4")
const express  = require("express") 

const cors= require("cors")

const con= require("./DBConn.js")

async function startServer(){
const app= express()

    const server = new ApolloServer({
        typeDefs:`
        type Todo {
            id:ID!
            name:String!
        }
        type Query {

            getTodo:[Todo]
        }
        
        
        `,
        resolvers:{

            Query:{

                getTodo:async()=> {

console.log("hello")

var sql3 = `select * from student`;



  let result= await  con(sql3);

  console.log("result",result)

   return result

                }
            }
        },
      })

      app.use(express.json())

      app.use(cors())
      await server.start()

      app.use("/graphql",expressMiddleware(server))

      app.listen(8000,()=>{
        console.log("server start at 8000")
      })
      
      
      

}

startServer()