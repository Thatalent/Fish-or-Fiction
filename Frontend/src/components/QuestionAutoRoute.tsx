import { useEffect } from "react";
import {useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_QUESTION_IDS} from "../graphql/queries";

  const QuestionAutoRoute = () => {
    const navigate = useNavigate();
    const {data, loading, error} = useQuery(GET_QUESTION_IDS)

    useEffect(() => {
      const ids = data?.questions?.map((q:any) => q.id) ?? [];
      if (ids.length === 0) return;
      const currentIndex = Number(sessionStorage.getItem("questionIndex") ?? 0);
      const nextId = ids[currentIndex % ids.length];
      sessionStorage.setItem("questionIndex", String(currentIndex + 1));
      navigate(`/question/${nextId}`, {replace: true});
    }, [data, navigate])
if (loading) return null;
if (error) return <div>{error.message}</div>;
return null;
  }


export default QuestionAutoRoute;
