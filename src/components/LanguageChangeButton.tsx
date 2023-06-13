import { FormattedMessage } from "react-intl";
import { useAtom } from "jotai";
import { languageAtom } from "dotenv/atoms/atoms";

const languagesFlags = {
  fr: "🇫🇷",
  en: "🇬🇧",
  //de: "🇩🇪",
};

function LanguageChangeButton() {
  const [currentLanguage, setCurrentLanguage] = useAtom(languageAtom);

  return (
    <>
      <label htmlFor="language" className="block text-sm font-medium text-gray-900">
        <FormattedMessage id={"forms.inputs.labels.languages"} />
      </label>

      <select
        onChange={e => setCurrentLanguage(e.target.value)}
        value={currentLanguage}
        name="languageSelector"
        id="language"
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
      >
        {Object.entries(languagesFlags).map(([key, value]) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
}

export default LanguageChangeButton;
