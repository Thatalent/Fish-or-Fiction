import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';
import { useQuery, gql } from '@apollo/client';

import main_bg from '../images-videos/main-bg.mp4';
import SideBar from '../components/SideBar';

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

interface HomeProps {
  handleMenuToggle?: () => void;
}

function Home({ handleMenuToggle }: HomeProps) {
  // const { loading, error, data } = useQuery(GET_FISH_QUESTIONS)

  // if (loading) return <Typography>Loading...</Typography>
  // if (error) return <Typography color="error">Error: {error.message}</Typography>

  return (
    <>
      <Box className="h-screen w-full">
        <video
          className="absolute inset-0 z-0 max-h-screen w-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={main_bg} type="video/mp4" />
        </video>

        <h1 className="leading-1 absolute left-1/2 top-1/2 z-10 m-0 w-full -translate-x-1/2 -translate-y-1/2 p-0 text-center align-middle font-lilitaone text-[150px] font-normal tracking-tight text-white [-webkit-text-stroke:5px_black] [text-shadow:0_14px_8px_rgba(0,0,0,.25)]">
          FISH OR FICTION?
        </h1>

        <div className="absolute bottom-[208px] z-10 flex h-[120px] w-full justify-center gap-[215px]">
          <button className="buttons buttons_disabled w-[513px] pb-[29.5px] pt-[29.5px]">
            SINGLE PLAYER
          </button>
          <button className="buttons buttons_disabled w-[595px] pb-[29.5px] pt-[29.5px]">
            COMPETITVE MODE
          </button>
        </div>
      </Box>
      <SideBar
        handleMenuToggle={handleMenuToggle}
        pos={'right-0 top-[241px]'}
      />
    </>
  );
}

export default Home;
