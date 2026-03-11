import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from '@mui/material';
import { useQuery, gql } from '@apollo/client';

import { GET_GAME_EXPLANATIONS } from '../graphql/queries';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useNavigate } from 'react-router-dom';
import Cancel from '../images-videos/Cancel.svg';
import Icons from '../images-videos/Icons.svg';
import image4 from '../images-videos/image4.png';

function GameModeExplanation() {
    const { loading, error, data } = useQuery(GET_GAME_EXPLANATIONS)
    const navigate = useNavigate();
    if (loading) return <Typography>Loading...</Typography>
    if (error) return <Typography color="error">Error: {error.message}</Typography>

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${image4})` }}>
      <div className="flex-auto flex-row items-center w-full justify-between p-6 md:flex bg-white">
        <button className="border-none bg-transparent cursor-pointer" onClick={() => navigate(-1)}>
          <img
            className="h-[74px] w-[87px]"
            src={Icons}
            alt="Icons"
            aria-hidden="true"
          /></button>
        <h2 className="leading-1 m-0 w-full p-0 text-center align-middle font-lilitaone text-[100px] text-blue-900 font-normal">Game Mode Explanation</h2>
         <button className="border-none bg-transparent cursor-pointer" onClick={() => navigate(-1)}>
          <img
            className="h-[86px] w-[86px]"
            src={Cancel}
            alt="Cancel"
            aria-hidden="true"
          /></button>
      </div>
      <div className='max-w-5xl mx-auto bg-white rounded-[16px] shadow-md p-8 my-10'>
        <DocumentRenderer document={data.gameExplanations[0].explanation.document} />
        <button className="buttons buttons_disabled w-full pb-[29.5px] pt-[29.5px]" onClick={() => navigate(-1)}>GOT IT!</button>
      </div>
    </div>
  );
}

export default GameModeExplanation;