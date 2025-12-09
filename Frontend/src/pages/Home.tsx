import { Box, Typography, Card, CardContent, Button, Grid } from '@mui/material'
import { useQuery, gql } from '@apollo/client'

// Example GraphQL query - replace with your actual schema
// const GET_FISH_QUESTIONS = gql`
//   query GetFishQuestions {
//     fishQuestions {
//       id
//       title
//       question
//       options
//       answer
//     }
//   }
// `

function Home() {
  // const { loading, error, data } = useQuery(GET_FISH_QUESTIONS)

  // if (loading) return <Typography>Loading...</Typography>
  // if (error) return <Typography color="error">Error: {error.message}</Typography>

  return (
    <Box>
      <Typography variant="h3" component="h1" className="mb-8 text-gray-800 font-bold">
        Welcome to Fish or Fiction
      </Typography>
    </Box>
  )
}

export default Home
