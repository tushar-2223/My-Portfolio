
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Play, ExternalLink } from "lucide-react";

export const SpotifySection = () => {
  // Mock data - in a real app, you'd fetch this from Spotify API
  const currentTrack = {
    name: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    image: "/placeholder.svg"
  };

  const topTracks = [
    { name: "Stairway to Heaven", artist: "Led Zeppelin" },
    { name: "Hotel California", artist: "Eagles" },
    { name: "Sweet Child O' Mine", artist: "Guns N' Roses" },
    { name: "Comfortably Numb", artist: "Pink Floyd" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
            Currently Vibing To
          </h2>
          <p className="text-gray-400 text-lg">
            Music that keeps me coding
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Now Playing */}
          <Card className="p-8 bg-gradient-to-br from-green-900/20 to-green-800/10 border-green-700/30">
            <div className="flex items-center mb-6">
              <Music className="h-6 w-6 text-green-400 mr-2" />
              <span className="text-green-400 font-medium">Now Playing</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Music className="h-8 w-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-1">{currentTrack.name}</h3>
                <p className="text-gray-400 mb-2">{currentTrack.artist}</p>
                <p className="text-gray-500 text-sm">{currentTrack.album}</p>
              </div>

              <Button size="icon" className="bg-green-600 hover:bg-green-700 text-white">
                <Play className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-6">
              <div className="w-full bg-gray-800 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-1/3"></div>
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>1:23</span>
                <span>3:55</span>
              </div>
            </div>
          </Card>

          {/* Top Tracks */}
          <Card className="p-8 bg-gradient-to-br from-gray-900/50 to-gray-800/30 border-gray-700/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-white">Top Tracks This Month</h3>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-white/5">
                <ExternalLink className="h-4 w-4 mr-2" />
                Spotify
              </Button>
            </div>

            <div className="space-y-4">
              {topTracks.map((track, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors duration-200">
                  <span className="text-green-400 font-medium w-6">{index + 1}</span>
                  <div className="flex-1">
                    <p className="text-white font-medium">{track.name}</p>
                    <p className="text-gray-400 text-sm">{track.artist}</p>
                  </div>
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
