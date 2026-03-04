import {useNavigate, useParams} from 'react-router-dom';
import {useQuery} from '@apollo/client';
import { GET_QUESTION } from '../graphql/queries';
import trueButton from "../images-videos/TRUE_BUTTON.svg";
import falseButton from "../images-videos/FALSE_BUTTON.svg";
import gameBackground from "../images-videos/fish_background_img.svg";
import { Typography } from '@mui/material';
const QuestionPage = () =>{
  const navigate = useNavigate();
  const {id} = useParams<{id:string}>();
  const {data, loading, error} = useQuery(GET_QUESTION,{ variables: {id}, skip: !id,})
  const handleAnswer = (answer: boolean) => {
    if(!id) return;
    navigate(`/answer/${id}`, {state: {userAnswer: answer}});
  };
  if (loading) return null;
  if (error) return <div>{error.message}</div>;
  if (!data?.question) return null;
  return(

      <div className=" relative h-screen w-full  bg-cover bg-center bg-no-repeat m-0 overflow-hidden" style={{backgroundImage:`url(${gameBackground})`}}>
        <Typography>
          <div className="px-[58px] py-[40px] pt-[25px] pr-auto pb-[25px] pl-[58px] bg-white rounded-[20px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
            <div className='h-[183px]'></div>
            <p className="font-lilitaone text-[#1B3567]   text-[100px] font-normal m-0 ">{data.question.question}</p>
          </div>
        </Typography>
        <div className="flex justify-center align-center gap-[73px] mt-[57px]">
          <button className="w-[606px] h-[480px] bg-no-repeat bg-center bg-contain border-none bg-transparent mb-[60px] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]" style={{backgroundImage: `url(${trueButton})`}} onClick={() => handleAnswer(true)}></button>
          <button className="w-[606px] h-[480px] bg-no-repeat bg-center bg-contain border-none bg-transparent mb-[60px] drop-shadow-[4px_4px_4px_rgba(0,0,0,0.25)]" style={{backgroundImage: `url(${falseButton})`}} onClick={() => handleAnswer(false)}></button>
        </div>
    </div>
  );

};

export default QuestionPage;
