import { SignInOrUpForm } from "app"

export default function Login() {
  return (
    <div className="p-4">
      <h1>Welcome to EduQuest MCQ</h1>
      <SignInOrUpForm signInOptions={{ google: true }} />
    </div>
  );
};