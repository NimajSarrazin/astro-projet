export default function CardSectionDream({ title, text, icon, step }) {
  return (
    <div className="flex space-x-4">
      <div className="flex flex-col items-center">
          <div className="text-4xl">{icon}</div>
          {step === "Ready!" ? (
            ""
          ) : (
            <div className="border-s border-gray-300 h-full w-[1px]"></div>
          )}
        
      </div>
      <div className="pb-8">
        <p  className="text-3xl pb-2">
          <span className="font-bold">{step}</span>
          {title}
        </p>
        <p className="py-4 text-sm font-light ">{text}</p>
      </div>
    </div>
  );
}
