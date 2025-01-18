export default function Button({ title, style }) {
  console.log("props:", title);
  return (
    <>
      <button
        className={`bg-blue-400 py-2.5 px-4 rounded-md text-white ${style}`}
      >
        {title || "default"}
      </button>
    </>
  );
}

export function ButtonRegister() {
  return (
    <>
      <button className="bg-red-400 py-2.5 px-4 rounded-md text-white">
        Register
      </button>
    </>
  );
}
