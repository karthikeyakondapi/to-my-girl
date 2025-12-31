
import React, { useState, useEffect } from 'react';
import { PlumeriaIcon, PlumeriaPetal } from './components/PlumeriaIcon';

type Screen = 'opening' | 'poll' | 'cat-tease' | 'letter' | 'rejection';

// Helper component for word-by-word animation
const WordAnimate: React.FC<{ text: string; startDelay: number; speed?: number }> = ({ text, startDelay, speed = 0.08 }) => {
  const words = text.split(/(\s+)/); // Keeps whitespace to maintain formatting
  return (
    <>
      {words.map((word, i) => (
        <span
          key={i}
          className="opacity-0 animate-word-pop"
          style={{ animationDelay: `${startDelay + (i * speed)}s` }}
        >
          {word}
        </span>
      ))}
    </>
  );
};

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('opening');
  const [petals, setPetals] = useState<any[]>([]);

  // Generate random petals for background
  useEffect(() => {
    const newPetals = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `${Math.random() * 10}s`,
      size: Math.random() * 20 + 10
    }));
    setPetals(newPetals);
  }, []);

  const handleStart = () => {
    setScreen('poll');
  };

  const handleNo = () => {
    setScreen('rejection');
  };

  const handleBackToStart = () => {
    setScreen('opening');
  };

  const handlePollChoice = (choice: 'cats' | 'tejitha') => {
    if (choice === 'cats') {
      setScreen('cat-tease');
    } else {
      setScreen('letter');
    }
  };

  const handleTryAgain = () => {
    setScreen('poll');
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center p-6 md:p-12 font-soft selection:bg-pink-100">
      {/* Background Petals */}
      {petals.map(p => (
        <PlumeriaPetal 
          key={p.id} 
          style={{ 
            left: p.left, 
            animationDuration: p.duration, 
            animationDelay: p.delay,
            transform: `scale(${p.size / 20})`
          }} 
        />
      ))}

      {/* Screen Rendering */}
      <div className="max-w-3xl w-full z-20 flex flex-col items-center">
        {screen === 'opening' && (
          <div className="text-center">
            <div className="animate-in fade-in duration-1000">
               <PlumeriaIcon className="mx-auto mb-10 animate-pulse" size={64} />
            </div>
            
            <div className="mb-14 overflow-hidden min-h-[4rem] flex flex-col items-center">
              <h1 className="text-3xl md:text-5xl font-serif-aesthetic text-pink-400 italic animate-sway">
                <span className="typing-effect">
                  Hi babyyy… 🌸
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-both">
              <button 
                onClick={handleStart}
                className="px-8 py-3 bg-pink-50 text-pink-500 rounded-full border border-pink-100 hover:bg-pink-100 transition-all duration-300 shadow-sm"
              >
                Let’s go in 🥺🌷
              </button>
              <button 
                onClick={handleNo}
                className="px-8 py-3 text-gray-400 hover:text-gray-600 transition-all duration-300"
              >
                No, I’m not interested 🙄
              </button>
            </div>
          </div>
        )}

        {screen === 'rejection' && (
          <div className="text-center animate-in zoom-in-95 duration-700 flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-serif-aesthetic text-pink-400 italic mb-8">
              why baby??🥺
            </h2>
            <img 
              src="https://media.tenor.com/FLBmfkn2QJ0AAAAM/im-good.gif" 
              alt="Sad reaction" 
              className="mx-auto rounded-3xl mb-10 w-64 h-64 object-cover shadow-lg"
            />
            <button 
              onClick={handleBackToStart}
              className="px-8 py-3 bg-white text-gray-500 rounded-full border border-gray-100 hover:bg-gray-50 transition-all duration-300 shadow-sm"
            >
              Okay fine, let's go back 🙄🌷
            </button>
          </div>
        )}

        {screen === 'poll' && (
          <div className="text-center animate-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-2xl md:text-4xl font-serif-aesthetic text-gray-700 mb-12">
              Whom does karthik love the most
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => handlePollChoice('cats')}
                className="group relative px-10 py-6 bg-white rounded-2xl border border-pink-50 hover:border-pink-200 transition-all duration-500 shadow-sm hover:shadow-md flex flex-col items-center gap-2"
              >
                <span className="text-4xl">🐱</span>
                <span className="text-gray-500 font-medium">Cats</span>
              </button>
              <button 
                onClick={() => handlePollChoice('tejitha')}
                className="group relative px-10 py-6 bg-white rounded-2xl border border-pink-50 hover:border-pink-200 transition-all duration-500 shadow-sm hover:shadow-md flex flex-col items-center gap-2"
              >
                <span className="text-4xl">🌸</span>
                <span className="text-gray-500 font-medium">Tejitha</span>
              </button>
            </div>
          </div>
        )}

        {screen === 'cat-tease' && (
          <div className="text-center animate-in zoom-in-95 duration-700 flex flex-col items-center">
            <img 
              src="https://media.tenor.com/StyK0kLY-5oAAAAM/aminou.gif" 
              alt="Crying Cat" 
              className="mx-auto rounded-3xl mb-8 w-64 h-64 object-cover shadow-lg"
            />
            <p className="text-2xl font-serif-aesthetic text-gray-700 max-w-md mx-auto leading-relaxed mb-10">
              NO MOMMY HE LOVES U <br/>
              <span className="text-pink-400 mt-2 block italic">THE MOST IN THIS WORLDD.. 🌸</span>
            </p>
            <button 
              onClick={handleTryAgain}
              className="px-8 py-3 bg-white text-pink-400 rounded-full border border-pink-100 hover:bg-pink-50 transition-all duration-300 shadow-sm animate-in fade-in duration-1000 delay-500 fill-mode-both"
            >
              Try again 🥺
            </button>
          </div>
        )}

        {screen === 'letter' && (
          <div className="w-full h-auto p-4 md:p-8 animate-in fade-in duration-1000 flex flex-col items-center">
            <PlumeriaIcon className="mb-12 opacity-40" size={40} />
            <div className="font-letter text-lg md:text-xl text-gray-700 space-y-8 max-w-2xl leading-relaxed text-left whitespace-pre-wrap">
              
              <div>
                <WordAnimate startDelay={0.5} text="my dear bbbggggggg," />
              </div>
              
              <div>
                <WordAnimate startDelay={1.5} text="as we step into the new year together, i just want you to know that you are the most precious girl and the best gift of my life." />
              </div>

              <div>
                <WordAnimate startDelay={4.0} text="i just cannot forget this year, 2025, my 20th year (uncle anukuntunnav kadhara), it’s ok.." />
              </div>

              <div>
                <WordAnimate startDelay={6.5} text="and ya, you said that you ate grapes under the table at the starting of this year.. that means it’s exactly one year since you ate them.. i think each grape you ate directly pointed to me maybe..?" />
              </div>

              <div>
                <WordAnimate startDelay={10.0} text="idk dani valla kalisamo or idk, kalisam anthe.. the most beautiful moment which i would cherish for my entire life.." />
              </div>

              <div>
                <WordAnimate startDelay={13.5} text="i don’t even know how the past 5 and a half months have passed? like how? one semester got over..." />
              </div>

              <div>
                <WordAnimate startDelay={16.5} text="from july 17th to december 31st, 2025... baby...." />
              </div>

              <div className="italic text-pink-400">
                <WordAnimate startDelay={19.5} text="how? where did you come from? yes, all the love i craved since 20 years finally became mine. yes, you are mine, my bbgg. all my love deserves you..." />
              </div>

              <div>
                <WordAnimate startDelay={24.0} text="thank you so much for being you all the time.. i hope and ya, i want you to be the same forever.." />
              </div>

              <div>
                <WordAnimate startDelay={27.5} text="the future years are waiting for us to see us get settled, earn each other’s love and care.... and how to end this?" />
              </div>

              <div className="text-2xl font-medium text-pink-500">
                <WordAnimate startDelay={31.5} text="marriage obviously.." />
              </div>

              <div>
                <WordAnimate startDelay={33.5} text="chaala maaripoyay jeevitham lo.... when i just look back into my life.. em ledhu akkada." />
              </div>

              <div>
                <WordAnimate startDelay={37.0} text="i will loudly say.... sorry, i will shouttt that life got better only after she came into my life. only after i fell in love." />
              </div>

              <div>
                <WordAnimate startDelay={41.5} text="tbh, nu ochakane confidence build aindhi baby.. maybe andhuvalle chadiva.. pedda package kakapoyina edo campus lone job kotta.." />
              </div>

              <div>
                <WordAnimate startDelay={46.5} text="i don’t know baby.. all i need is your love and everything you do out of love.." />
              </div>

              <div className="pt-8 italic text-pink-400/80 border-t border-pink-50">
                <WordAnimate startDelay={50.0} text="maybe it’s the silence in your eyes maybe it’s the lilac when you’re shy maybe it’s the mystery of your love all i need is a sign from the stars above" />
              </div>

              <div className="italic text-pink-400/80">
                <WordAnimate startDelay={55.0} text="maybe it’s the way that you breathe in me maybe it’s the man that you see in me maybe it’s the fragrance of your hair Yeah, I just wanna kiss you when you're there I just want you all around me, baby Can we make that happen, please?" />
              </div>

              <div>
                <WordAnimate startDelay={62.0} text="so ya baby here's to us , to new beginnings and to a year filled with countless kisses,hugs n ofcourse debbalu too with endless love n crazy memories together... I LOVE YOU FOREVER....." />
              </div>

              <div className="text-right font-serif-aesthetic text-pink-500 italic pr-4">
                <WordAnimate startDelay={67.0} text="nee carruuuu" />
              </div>
              
              <div className="pt-12 animate-in fade-in duration-1000 delay-[69000ms] flex justify-center">
                <PlumeriaIcon size={32} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Persistent soft corner decorations */}
      <div className="fixed top-4 left-4 opacity-20 pointer-events-none">
        <PlumeriaIcon size={40} />
      </div>
      <div className="fixed bottom-4 right-4 opacity-20 pointer-events-none">
        <PlumeriaIcon size={60} />
      </div>
    </div>
  );
};

export default App;
