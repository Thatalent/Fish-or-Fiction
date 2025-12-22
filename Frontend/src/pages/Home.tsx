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
    <Box className="h-screen w-full ">
      <video
        className="z-0 absolute inset-0 max-h-screen w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={main_bg} type="video/mp4" />
      </video>

      <h1
        className="absolute top-1/2 left-1/2     -translate-x-1/2 -translate-y-1/2 w-full
 font-lilitaone text-white text-[150px] font-normal leading-1 z-10 m-0 p-0 text-center align-middle tracking-tight [text-shadow:0_14px_8px_rgba(0,0,0,.25)]
  [-webkit-text-stroke:5px_black]
"
      >
        FISH OR FICTION?
      </h1>

      <div className="w-full h-[120px] absolute bottom-[208px] z-10 flex gap-[215px] justify-center">
        <button
          className="w-[513px] [background:linear-gradient(180deg,#1B3567_82.21%,#22478E_100%)] border-none font-inter rounded-[20px] p-[10px] font-bold text-[50px] text-white text-center align-middle leading-none   [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)]
"
        >
          SINGLE PLAYER
        </button>
        <button
          className="w-[595px] [background:linear-gradient(180deg,#1B3567_82.21%,#22478E_100%)] border-none font-inter rounded-[20px] p-[10px] font-bold text-[50px] text-white text-center align-middle leading-none   [box-shadow:0px_4px_4px_0px_rgba(0,0,0,0.25)]
"
        >
          COMPETITVE MODE
        </button>
      </div>
    </Box>
  );
}

export default Home;
