import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { useQuery, gql } from "@apollo/client";

import main_bg from "../images-videos/main-bg.mp4";

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
      <video
        className="z-0 absolute inset-0 max-h-screen w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={main_bg} type="video/mp4" />
      </video>

      <h1
        className="relative font-lilitaone text-white text-[150px] font-normal leading-1 z-10 m-0 p-0 text-center align-middle tracking-tight [text-shadow:0_14px_8px_rgba(0,0,0,.25)]
  [-webkit-text-stroke:5px_black]
"
      >
        FISH OR FICTION?
      </h1>
    </Box>
  );
}

export default Home;
