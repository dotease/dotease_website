import { signIn } from "next-auth/react";

function GitHubConnectButton() {
  async function logIn() {
    await signIn("github", { redirect: true, callbackUrl: "/" });
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <button type={"button"} onClick={logIn} className={"inline-block ml-2 rounded-lg bg-black hover:bg-gray-900 px-5 p-3 text-sm font-medium text-white"}>
      <span className={"flex items-center justify-center max-h-full"}>
        <img className={"w-6 mr-2 p-0"} src="/github-mark-white.png" alt="github logo" />
        Sign in with GitHub
      </span>
    </button>
  );
}

export default GitHubConnectButton;
