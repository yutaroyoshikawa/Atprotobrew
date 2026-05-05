import { useParams } from "react-router-dom";

export function ChannelDetail() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen bg-sky-50 flex flex-col items-center justify-center px-4">
      {/* <div className="bg-white rounded-3xl shadow-lg px-8 py-10 flex flex-col items-center gap-6 max-w-sm w-full">
        <div
          className="w-24 h-24 rounded-3xl flex items-center justify-center shadow-md"
          style={{ backgroundColor: channel.color }}
        >
          <span className="text-white text-4xl font-bold">
            {channel.letter}
          </span>
        </div>

        <div className="text-center">
          <AppH1 className="text-2xl font-semibold text-slate-800">
            {channel.name}
          </AppH1>
          <p className="text-slate-400 text-sm mt-1">{channel.url}</p>
        </div>

        <a
          href={channel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium rounded-xl py-3 px-6 text-center transition-colors duration-150"
        >
          起動する
        </a>

        <AppButton render={(props) => <Link {...props} to={""} />}>
          <AppText>← ホームに戻る</AppText>
        </AppButton>
      </div> */}
    </div>
  );
}
