import { signIn } from "next-auth/react";
import {FaGithub} from "react-icons/fa";

function GitHubConnectButton() {
  async function logIn() {
    await signIn("github", { redirect: true, callbackUrl: "/" });
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <button type={"button"} onClick={logIn} className={"inline-block ml-2 rounded-lg bg-black hover:bg-gray-900 px-5 p-3 text-sm font-medium text-white"}>
      <span className={"flex items-center justify-center max-h-full"}>
        <FaGithub size="22px" className="mr-3" />
        Sign in with GitHub
      </span>
    </button>
  );
}

export default GitHubConnectButton;
