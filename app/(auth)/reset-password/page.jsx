import dynamic from "next/dynamic";

const ResetPasswordForm = dynamic(
  () => import("./ResetPasswordForm"),
  { ssr: false } 
);

export default function ResetPasswordPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <ResetPasswordForm />
    </div>
  );
}
