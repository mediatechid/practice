import { defaults } from "autoprefixer";

const ChitChat = () => {
    return (
        <div class="p-9 font-mono bg-amber-400 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div class="shrink-0">
                <img class="h-12 w-12" src="/img/logo192.png" alt="ChitChat Logo"/>
            </div>
            <div>
                <div class="text-xl font-medium text-black">ChitChat</div>
                <p class="text-slate-500">You have a new message!</p>
            </div>
        </div>
    );
}

export default ChitChat;