import LanguageSection from "../components/LanguageSection";

type Props = {
  title:string;
  menu: string;
};

const SettingsPage: React.FC<Props> = ({title, menu}) => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
    <h1 className="h-16 bg-white shadow flex items-center px-6">{title}</h1>
    <div className="flex flex-1">
    <div className="w-48 bg-white shadow-md p-4 space-y-2">{menu}</div>
    <div className="flex-1 p-6 bg-gradient-to-b from-teal-700 via-teal-500 to-teal-400 text-white rounded-l-lg"><LanguageSection /></div>
    </div>
    </div>
  )
}

export default SettingsPage;
