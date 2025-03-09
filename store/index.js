import { createSlice, configureStore } from "@reduxjs/toolkit";
const songsData = [
    { quality: "⭐⭐⭐⭐⭐", number: 1, name: "Vlegend - You know I love you", file: '1tHl-vQd2OCw0naB4gdvXbRBRWHYx46wI', type: "mp3", size: "3,172 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Alan Walker", album: "Unknown" },
    { quality: "⭐⭐⭐⭐⭐", number: 96, name: "Alan Walker - Dark Side", file: '1KJZDRJYpCxc8PMC5g5PXX_gStCdtbWF1', type: "mp3", size: "3,172 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Vlegend", album: "Unknown" },
    { quality: "⭐⭐⭐⭐⭐", number: 3, name: "Soundgarden - Outshined", type: "mp3", size: "4,852 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Badmotorfinger" },
    { quality: "⭐⭐⭐⭐", number: 2, name: "Soundgarden - Black Hole Sun", type: "mp3", size: "4,098 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Superunknown" },
    { quality: "⭐⭐⭐⭐", number: 4, name: "Soundgarden - Spoonman", type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Superunknown" },
    { quality: "⭐⭐⭐⭐", number: 19, name: "Adele - Someone Like You", file: '1nQlh04rQQvOjBWxFFVhvAV_nrTlqGYXT', type: "mp3", size: "6,520 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "21" },
    { quality: "⭐⭐⭐⭐", number: 8, name: "Alan Walker - Faded", file: '1DYZ43LvBZiotVVchybeW2IgNIFBLfRBX', type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Alan Walker", album: "Different World" },
    { quality: "⭐⭐⭐⭐", number: 14, name: "Coldplay - A Sky Full of Stars", file: '1mBofD-uHzA-Z-IxV39vlRWb_WEVsxCPb', type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "Ghost Stories" },
    { quality: "⭐⭐⭐⭐⭐", number: 6, name: "OneRepublic - Counting Stars", file: '1RbDcCeIRo-r_CQ0iKK8So_8Ac7_N6Qw7', type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Native" },
    { quality: "⭐⭐⭐⭐⭐", number: 5, name: "One Direction - What Makes You Beautiful", file: '1u5AJexsHxLEunkbc4GAc7yVkr1rwIYuy', type: "mp3", size: "3,064 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "One Direction", album: "Up All Night" },
    { quality: "⭐⭐⭐⭐⭐", number: 7, name: "Soundgarden - Fell on Black Days", type: "mp3", size: "4,432 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Superunknown" },
    { quality: "⭐⭐⭐⭐", number: 9, name: "Soundgarden - Burden in My Hand", type: "mp3", size: "3,895 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Down on the Upside" },
    { quality: "⭐⭐⭐⭐", number: 10, name: "Soundgarden - Rusty Cage", type: "mp3", size: "4,256 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Badmotorfinger" },
    { quality: "⭐⭐⭐⭐", number: 12, name: "Adele - Rolling in the Deep", type: "mp3", size: "5,120 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "21" },
    { quality: "⭐⭐⭐⭐⭐", number: 20, name: "Adele - Set Fire to the Rain", type: "mp3", size: "5,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "21" },
    { quality: "⭐⭐⭐⭐⭐", number: 22, name: "Adele - Hello", type: "mp3", size: "6,800 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "25" },
    { quality: "⭐⭐⭐⭐", number: 24, name: "Alan Walker - Sing Me to Sleep", type: "mp3", size: "3,500 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Alan Walker", album: "Different World" },
    { quality: "⭐⭐⭐⭐⭐", number: 25, name: "Alan Walker - Spectre", type: "mp3", size: "3,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Alan Walker", album: "Single" },
    { quality: "⭐⭐⭐⭐", number: 26, name: "Alan Walker - Darkside", type: "mp3", size: "3,700 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Alan Walker", album: "Different World" },
    { quality: "⭐⭐⭐⭐", number: 27, name: "Coldplay - Yellow", type: "mp3", size: "4,780 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "Parachutes" },
    { quality: "⭐⭐⭐⭐⭐", number: 28, name: "Coldplay - The Scientist", type: "mp3", size: "4,960 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "A Rush of Blood to the Head" },
    { quality: "⭐⭐⭐⭐⭐", number: 20, name: "Stephen Sanchez - Until I found you ", type: "mp3",file:'1yPiIypv2uAEcfHRKfDzEJc_Luk8kIFsr', size: "4,960 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "A Rush of Blood to the Head" },
    { quality: "⭐⭐⭐⭐⭐", number: 68, name: "Ellie Goulding - Love Me Like You Do", file:'1Vl_Ho_CKgtgdVcEa4SP2AeVy-R9Ep0zh',type: "mp3", size: "4,960 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "A Rush of Blood to the Head" },
    { quality: "⭐⭐⭐⭐⭐", number: 29, name: "Coldplay - Fix You", type: "mp3", size: "4,820 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "X&Y" },
    { quality: "⭐⭐⭐⭐", number: 30, name: "OneRepublic - Secrets", type: "mp3", size: "3,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Waking Up" },
    { quality: "⭐⭐⭐⭐", number: 31, name: "OneRepublic - Apologize",file:'1qQ6ntE3naQiLQzumW9a5Ipx_V8bvZxIo', type: "mp3", size: "3,860 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Dreaming Out Loud" },
    { quality: "⭐⭐⭐⭐⭐", number: 32, name: "OneRepublic - Good Life", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Waking Up" },
    { quality: "⭐⭐⭐⭐", number: 33, name: "One Direction - Story of My Life", type: "mp3", size: "3,760 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "One Direction", album: "Midnight Memories" },
    { quality: "⭐⭐⭐⭐", number: 34, name: "One Direction - Drag Me Down", type: "mp3", size: "3,880 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "One Direction", album: "Made in the A.M." },
    { quality: "⭐⭐⭐⭐⭐", number: 35, name: "One Direction - Night Changes", type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "One Direction", album: "Four" },
    { quality: "⭐⭐⭐⭐", number: 36, name: "Soundgarden - The Day I Tried to Live", type: "mp3", size: "4,400 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Superunknown" },
    { quality: "⭐⭐⭐⭐", number: 37, name: "Soundgarden - Pretty Noose", type: "mp3", size: "4,250 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Down on the Upside" },
    { quality: "⭐⭐⭐⭐", number: 38, name: "Adele - When We Were Young", type: "mp3", size: "5,600 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "25" },
    { quality: "⭐⭐⭐⭐⭐", number: 39, name: "Adele - Water Under the Bridge", type: "mp3", size: "5,300 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "25" },
    { quality: "⭐⭐⭐⭐", number: 40, name: "Coldplay - Clocks",file:'16oLiUnz5G6R5CS37E3o7eJFPN5mAGua3', type: "mp3", size: "4,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "A Rush of Blood to the Head" },
    { quality: "⭐⭐⭐⭐⭐", number: 41, name: "Coldplay - Viva La Vida", type: "mp3", size: "5,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "Viva La Vida or Death and All His Friends" },
    { quality: "⭐⭐⭐⭐", number: 42, name: "OneRepublic - Love Runs Out", type: "mp3", size: "3,990 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Native" },
    { quality: "⭐⭐⭐⭐", number: 43, name: "Soundgarden - My Wave", type: "mp3", size: "4,500 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Superunknown" },
    { quality: "⭐⭐⭐⭐", number: 44, name: "Soundgarden - Jesus Christ Pose", type: "mp3", size: "4,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Badmotorfinger" },
    { quality: "⭐⭐⭐⭐", number: 45, name: "Soundgarden - Like Suicide", type: "mp3", size: "4,850 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Superunknown" },
    { quality: "⭐⭐⭐⭐", number: 46, name: "Adele - All I Ask",file: '1Da46HcL7LGyjbZFu2HWUzITa3ZK5GbOm', type: "mp3", size: "5,700 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "25" },
    { quality: "⭐⭐⭐⭐⭐", number: 47, name: "Adele - Easy on Me", type: "mp3", size: "6,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "30" },
    { quality: "⭐⭐⭐⭐", number: 48, name: "Adele - Chasing Pavements", type: "mp3", size: "5,250 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "19" },
    { quality: "⭐⭐⭐⭐", number: 49, name: "Alan Walker - On My Way", type: "mp3", size: "3,400 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Alan Walker", album: "Different World" },
    { quality: "⭐⭐⭐⭐⭐", number: 50, name: "Alan Walker - Alone", type: "mp3", size: "3,600 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Alan Walker", album: "Different World" },
    { quality: "⭐⭐⭐⭐", number: 51, name: "Alan Walker - Tired", type: "mp3", size: "3,700 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Alan Walker", album: "Different World" },
    { quality: "⭐⭐⭐⭐", number: 52, name: "Coldplay - Paradise", type: "mp3", size: "4,920 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "Mylo Xyloto" },
    { quality: "⭐⭐⭐⭐⭐", number: 53, name: "Coldplay - Speed of Sound", type: "mp3", size: "4,750 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "X&Y" },
    { quality: "⭐⭐⭐⭐⭐", number: 54, name: "Coldplay - Adventure of a Lifetime",file:'1Wf12XcyD-KXxAiSUa-6KNZdadmiWf110', type: "mp3", size: "5,000 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "A Head Full of Dreams" },
    { quality: "⭐⭐⭐⭐", number: 55, name: "OneRepublic - Rescue Me", type: "mp3", size: "3,820 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Human" },
    { quality: "⭐⭐⭐⭐", number: 56, name: "OneRepublic - If I Lose Myself", type: "mp3", size: "4,000 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Native" },
    { quality: "⭐⭐⭐⭐⭐", number: 57, name: "OneRepublic - I Lived", type: "mp3", size: "4,350 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Native" },
    { quality: "⭐⭐⭐⭐", number: 58, name: "One Direction - Steal My Girl", type: "mp3", size: "3,980 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "One Direction", album: "Four" },
    { quality: "⭐⭐⭐⭐", number: 59, name: "One Direction - Best Song Ever", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "One Direction", album: "Midnight Memories" },
    { quality: "⭐⭐⭐⭐⭐", number: 60, name: "One Direction - Little Things", type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "One Direction", album: "Take Me Home" },
    { quality: "⭐⭐⭐⭐", number: 61, name: "Soundgarden - Drawing Flies", type: "mp3", size: "4,150 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Soundgarden", album: "Badmotorfinger" },
    { quality: "⭐⭐⭐⭐", number: 62, name: "Adele - Love in the Dark", type: "mp3", size: "5,500 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Adele", album: "25" },
    { quality: "⭐⭐⭐⭐⭐", number: 63, name: "Coldplay - Magic", type: "mp3", size: "4,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Coldplay", album: "Ghost Stories" },
    { quality: "⭐⭐⭐⭐", number: 64, name: "OneRepublic - No Vacancy", type: "mp3", size: "3,950 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "OneRepublic", album: "Oh My My" },
    { quality: "⭐⭐⭐⭐⭐", number: 65, name: "One Direction - History", type: "mp3", size: "4,300 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "One Direction", album: "Made in the A.M." },
    { quality: "⭐⭐⭐⭐", number: 66, name: "The Beatles - Hey Jude", type: "mp3", size: "5,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "The Beatles", album: "The Beatles (White Album)" },
    { quality: "⭐⭐⭐⭐⭐", number: 67, name: "Queen - Bohemian Rhapsody", type: "mp3", size: "6,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Queen", album: "A Night at the Opera" },
    { quality: "⭐⭐⭐⭐", number: 68, name: "Led Zeppelin - Stairway to Heaven", type: "mp3", size: "6,500 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Led Zeppelin", album: "Led Zeppelin IV" },
    { quality: "⭐⭐⭐⭐⭐", number: 69, name: "Pink Floyd - Comfortably Numb", type: "mp3", size: "5,800 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Pink Floyd", album: "The Wall" },
    { quality: "⭐⭐⭐⭐", number: 70, name: "Nirvana - Smells Like Teen Spirit", type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Nirvana", album: "Nevermind" },
    { quality: "⭐⭐⭐⭐⭐", number: 71, name: "Michael Jackson - Billie Jean", type: "mp3", size: "4,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Michael Jackson", album: "Thriller" },
    { quality: "⭐⭐⭐⭐", number: 72, name: "Eagles - Hotel California", file:'1BbO9FuIZs5z53YTrmH81l08i662Nvnu6',type: "mp3", size: "5,600 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Eagles", album: "Hotel California" },
    { quality: "⭐⭐⭐⭐⭐", number: 73, name: "U2 - With or Without You", type: "mp3", size: "4,800 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "U2", album: "The Joshua Tree" },
    { quality: "⭐⭐⭐⭐", number: 74, name: "The Rolling Stones - Paint It Black", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "The Rolling Stones", album: "Aftermath" },
    { quality: "⭐⭐⭐⭐⭐", number: 75, name: "David Bowie - Heroes", type: "mp3", size: "4,700 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "David Bowie", album: "Heroes" },
    { quality: "⭐⭐⭐⭐", number: 76, name: "Radiohead - Creep", type: "mp3", size: "4,300 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Radiohead", album: "Pablo Honey" },
    { quality: "⭐⭐⭐⭐⭐", number: 77, name: "Oasis - Wonderwall", type: "mp3", size: "4,500 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Oasis", album: "(What's the Story) Morning Glory?" },
    { quality: "⭐⭐⭐⭐", number: 78, name: "Guns N' Roses - Sweet Child O' Mine", type: "mp3", size: "5,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Guns N' Roses", album: "Appetite for Destruction" },
    { quality: "⭐⭐⭐⭐⭐", number: 79, name: "Metallica - Enter Sandman", type: "mp3", size: "5,400 KB", speed: "T3 or Higher", bitrate: 128, genre: "Metal", artist: "Metallica", album: "Metallica" },
    { quality: "⭐⭐⭐⭐", number: 80, name: "Red Hot Chili Peppers - Californication", type: "mp3", size: "4,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Red Hot Chili Peppers", album: "Californication" },
    { quality: "⭐⭐⭐⭐⭐", number: 81, name: "The Killers - Mr. Brightside",file:'1sWrUZ0I2wBjkRpcaOd-TEATJKFa0DY7D', type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "The Killers", album: "Hot Fuss" },
    { quality: "⭐⭐⭐⭐", number: 82, name: "Arctic Monkeys - Do I Wanna Know?", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Arctic Monkeys", album: "AM" },
    { quality: "⭐⭐⭐⭐⭐", number: 83, name: "Foo Fighters - Everlong", type: "mp3", size: "4,800 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Foo Fighters", album: "The Colour and the Shape" },
    { quality: "⭐⭐⭐⭐", number: 84, name: "Linkin Park - In the End", type: "mp3", size: "4,300 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Linkin Park", album: "Hybrid Theory" },
    { quality: "⭐⭐⭐⭐⭐", number: 85, name: "Green Day - Boulevard of Broken Dreams", type: "mp3", size: "4,700 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Green Day", album: "American Idiot" },
    { quality: "⭐⭐⭐⭐", number: 86, name: "The Weeknd - Blinding Lights", type: "mp3", size: "3,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "The Weeknd", album: "After Hours" },
    { quality: "⭐⭐⭐⭐⭐", number: 87, name: "Daft Punk - Get Lucky", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Daft Punk", album: "Random Access Memories" },
    { quality: "⭐⭐⭐⭐", number: 88, name: "Ed Sheeran - Shape of You", type: "mp3", size: "3,800 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Ed Sheeran", album: "÷ (Divide)" },
    { quality: "⭐⭐⭐⭐⭐", number: 89, name: "Bruno Mars - Uptown Funk", type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Bruno Mars", album: "Uptown Special" },
    { quality: "⭐⭐⭐⭐", number: 90, name: "Katy Perry - Roar", type: "mp3", size: "3,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Katy Perry", album: "Prism" },
    { quality: "⭐⭐⭐⭐⭐", number: 91, name: "Lady Gaga - Die with a smile", file:'1OJAvlV0-rmalI8ffiJyCZIUpMBASykw5', type: "mp3", size: "4,300 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Lady Gaga", album: "The Fame Monster" },
    { quality: "⭐⭐⭐⭐", number: 92, name: "Rihanna - Diamonds", type: "mp3", size: "4,000 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Rihanna", album: "Unapologetic" },
    { quality: "⭐⭐⭐⭐⭐", number: 93, name: "Taylor Swift - Blank Space", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Taylor Swift", album: "1989" },
    { quality: "⭐⭐⭐⭐", number: 94, name: "Drake - God's Plan", type: "mp3", size: "3,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Hip-Hop", artist: "Drake", album: "Scorpion" },
    { quality: "⭐⭐⭐⭐⭐", number: 95, name: "Post Malone - Circles", type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Post Malone", album: "Hollywood's Bleeding" },
    { quality: "⭐⭐⭐⭐", number: 96, name: "Billie Eilish - Bad Guy", file:'1nh9N0VIIb_bURKc8AGcJTUrmkPxbj8wE', type: "mp3", size: "3,800 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Billie Eilish", album: "When We All Fall Asleep, Where Do We Go?" },
    { quality: "⭐⭐⭐⭐⭐", number: 97, name: "Ariana Grande - Thank U, Next", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Ariana Grande", album: "Thank U, Next" },
    { quality: "⭐⭐⭐⭐", number: 98, name: "Maroon 5 - Sugar", type: "mp3", size: "4,000 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Maroon 5", album: "V" },
    { quality: "⭐⭐⭐⭐⭐", number: 99, name: "Imagine Dragons - Believer", type: "mp3", size: "4,300 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Imagine Dragons", album: "Evolve" },
    { quality: "⭐⭐⭐⭐", number: 100, name: "Shawn Mendes - Señorita", type: "mp3", size: "3,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Shawn Mendes", album: "Shawn Mendes" },
    { quality: "⭐⭐⭐⭐⭐", number: 101, name: "Sam Smith - Stay With Me", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Sam Smith", album: "In the Lonely Hour" },
    { quality: "⭐⭐⭐⭐", number: 102, name: "John Legend - All of Me", type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "John Legend", album: "Love in the Future" },
    { quality: "⭐⭐⭐⭐⭐", number: 103, name: "Sia - Chandelier", type: "mp3", size: "4,300 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Sia", album: "1000 Forms of Fear" },
    { quality: "⭐⭐⭐⭐", number: 104, name: "Hozier - Take Me to Church", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Rock", artist: "Hozier", album: "Hozier" },
    { quality: "⭐⭐⭐⭐⭐", number: 105, name: "Lorde - Royals", type: "mp3", size: "3,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Lorde", album: "Pure Heroine" },
    { quality: "⭐⭐⭐⭐", number: 106, name: "Khalid - Talk", type: "mp3", size: "4,000 KB", speed: "T3 or Higher", bitrate: 128, genre: "Pop", artist: "Khalid", album: "Free Spirit" },
    { quality: "⭐⭐⭐⭐⭐", number: 107, name: "The Chainsmokers - Closer", type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "The Chainsmokers", album: "Collage" },
    { quality: "⭐⭐⭐⭐", number: 108, name: "Zedd - Stay", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Zedd", album: "Stay" },
    { quality: "⭐⭐⭐⭐⭐", number: 109, name: "Marshmello - Alone", type: "mp3", size: "3,900 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Marshmello", album: "Alone" },
    { quality: "⭐⭐⭐⭐", number: 110, name: "Calvin Harris - Summer", type: "mp3", size: "4,000 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Calvin Harris", album: "Motion" },
    { quality: "⭐⭐⭐⭐⭐", number: 111, name: "Avicii - Wake Me Up", type: "mp3", size: "4,300 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Avicii", album: "True" },
    { quality: "⭐⭐⭐⭐", number: 112, name: "Kygo - Firestone", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Kygo", album: "Cloud Nine" },
    { quality: "⭐⭐⭐⭐⭐", number: 113, name: "Martin Garrix - Animals", type: "mp3", size: "4,200 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Martin Garrix", album: "Animals" },
    { quality: "⭐⭐⭐⭐", number: 114, name: "Major Lazer - Lean On", type: "mp3", size: "4,000 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "Major Lazer", album: "Peace Is the Mission" },
    { quality: "⭐⭐⭐⭐⭐", number: 115, name: "DJ Snake - Let Me Love You", type: "mp3", size: "4,100 KB", speed: "T3 or Higher", bitrate: 128, genre: "Electronic", artist: "DJ Snake", album: "Encore" }
];
const videosData = [
    {
        name: "Bohemian Rhapsody",
        type: "single",
        year: "1975",
        rating: "5",
        length: "5:55",
        track: "1",
        quality: "⭐⭐⭐⭐⭐",
        number: 1,
        size: "5,432 KB",
        speed: "T3 or Higher",
        bitrate: 320,
        genre: "Rock",
        artist: "Queen",
        album: "A Night at the Opera"
    },
    {
        name: "Thriller",
        type: "album",
        year: "1982",
        rating: "5",
        length: "42:19",
        track: "10",
        quality: "⭐⭐⭐⭐",
        number: 2,
        size: "120,500 KB",
        speed: "T1",
        bitrate: 256,
        genre: "Pop",
        artist: "Michael Jackson",
        album: "Thriller"
    },
    {
        name: "Shape of You",
        type: "single",
        year: "2017",
        rating: "4",
        length: "3:53",
        track: "1",
        quality: "⭐⭐⭐⭐",
        number: 3,
        size: "3,985 KB",
        speed: "T3 or Higher",
        bitrate: 192,
        genre: "Pop",
        artist: "Ed Sheeran",
        album: "Divide"
    },
    {
        name: "Never Gonna Give You Up",
        type: "single",
        year: "1987",
        rating: "4",
        length: "3:33",
        track: "1",
        quality: "⭐⭐⭐⭐",
        number: 4,
        size: "3,200 KB",
        speed: "Cable",
        bitrate: 128,
        genre: "Pop",
        artist: "Rick Astley",
        album: "Whenever You Need Somebody"
    },
    {
        name: "Back in Black",
        type: "album",
        year: "1980",
        rating: "5",
        length: "42:11",
        track: "10",
        quality: "⭐⭐⭐⭐⭐",
        number: 5,
        size: "95,400 KB",
        speed: "T1",
        bitrate: 320,
        genre: "Rock",
        artist: "AC/DC",
        album: "Back in Black"
    },
    {
        name: "Someone Like You",
        type: "single",
        year: "2011",
        rating: "5",
        length: "4:45",
        track: "1",
        quality: "⭐⭐⭐⭐⭐",
        number: 6,
        size: "4,870 KB",
        speed: "T3 or Higher",
        bitrate: 320,
        genre: "Pop",
        artist: "Adele",
        album: "21"
    },
    {
        name: "Hotel California",
        type: "single",
        year: "1976",
        rating: "5",
        length: "6:30",
        track: "1",
        quality: "⭐⭐⭐⭐",
        number: 7,
        size: "6,780 KB",
        speed: "DSL",
        bitrate: 192,
        genre: "Rock",
        artist: "Eagles",
        album: "Hotel California"
    },
    {
        name: "Dark Side of the Moon",
        type: "album",
        year: "1973",
        rating: "5",
        length: "43:00",
        track: "9",
        quality: "⭐⭐⭐⭐⭐",
        number: 8,
        size: "110,800 KB",
        speed: "T1",
        bitrate: 320,
        genre: "Progressive Rock",
        artist: "Pink Floyd",
        album: "The Dark Side of the Moon"
    },
    {
        name: "Uptown Funk",
        type: "single",
        year: "2014",
        rating: "4",
        length: "4:30",
        track: "1",
        quality: "⭐⭐⭐⭐",
        number: 9,
        size: "4,600 KB",
        speed: "T3 or Higher",
        bitrate: 256,
        genre: "Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        album: "Uptown Special"
    },
    {
        name: "Rolling in the Deep",
        type: "single",
        year: "2010",
        rating: "5",
        length: "3:49",
        track: "1",
        quality: "⭐⭐⭐⭐⭐",
        number: 10,
        size: "4,900 KB",
        speed: "T3 or Higher",
        bitrate: 320,
        genre: "Pop",
        artist: "Adele",
        album: "21"
    }
];

  
const generateId = () => Math.random().toString(36).substr(2, 9);

// const initialTab = {
//     id: generateId(),
//     type: '',
//     input: {},
//     result: {},
// };

const initialState = {
    tabs: [],
    activeTab:null,
    downlaods:[],
    activeRow:null
};

const slice = createSlice({
    name: "tab",
    initialState,
    reducers: {
        setAudioTab: (state, action) => {
            const { title, artist, album, genre, license, more, track, year, length, type } = action.payload;
        
            let input = more
                ? { id: generateId(), title, artist, album, genre, license, track, year, length, type, more }
                : { title, artist, album, genre, license };
        
            // console.log('input', JSON.parse(JSON.stringify(input)));
        
            const songQuery = typeof title === "string" ? title.trim().toLowerCase() : "";
            const artistQuery = typeof artist === "string" ? artist.trim().toLowerCase() : "";
        
            let result = [];
            if (songQuery || artistQuery) {
                result = songsData.filter((song) => {
                    const [artistPart, songPart] = song.name.toLowerCase().split(" - ");
                    return (artistQuery ? artistPart.includes(artistQuery) : true) &&
                           (songQuery ? songPart.includes(songQuery) : true);
                });
            }
        
            // console.log('result', JSON.parse(JSON.stringify(result)));
        
            // Extract unique artists from the result
            const artists = [...new Set(result.map(song => song.name.split(" - ")[0]))];
        
            // Extract genres if available (Assuming genre data is present in the object)
            const genres = [...new Set(result.map(song => song.genre).filter(g => g))]; 
        
            // Extract albums if available (Assuming album data is present in the object)
            const albums = [...new Set(result.map(song => song.album).filter(a => a))];
        
            const tabId = generateId();
            state.tabs.push({ id: tabId, type: "audio", input, result, genres, artists, albums });
            state.activeTab = tabId;
        },
        
        setNewActiveTab:(state, action)=>{
            const {id} = action.payload;
            state.activeTab=id;
        },
        makeActiveTabNull: (state) => {
            state.activeTab = null;
            // console.log('result',JSON.parse(JSON.stringify(state)))
        },
        deleteTab: (state, action) => {
            const { id } = action.payload;
            state.tabs = state.tabs.filter((tab) => tab.id !== id);
        
            if (state.activeTab === id) {
                state.activeTab = state.tabs.length > 0 ? state.tabs[0].id : null;
            } else if (state.tabs.length === 0) {
                state.activeTab = null; 
            }
        
            // console.log('Tabs after deletion:', JSON.parse(JSON.stringify(state)));
        },
        setNewActiveRow: (state, action) => {
            const { id } = action.payload;
            
            // console.log(JSON.parse(JSON.stringify(id)));
            const activeTabObject = state.tabs?.find(tab => tab.id === state.activeTab);
            const a = activeTabObject?.result?.find(row => row.name === id);
            state.activeRow = a
            console.log('new',JSON.parse(JSON.stringify(state)));
        },
        makeActiveRowNull:(state, action)=>{
            state.activeRow = null;
        },
        setVideoTab: (state, action) => {
            const { title, rating, more, track, year, length, type } = action.payload;
        
            let input = more
                ? { id: generateId(), title, rating, track, year, length, type, more }
                : { title, rating, year, type };
        
            // console.log('input', JSON.parse(JSON.stringify(input)));
        
            const titleQuery = typeof title === "string" ? title.trim().toLowerCase() : "";
            const typeQuery = typeof type === "string" ? type.trim().toLowerCase() : "";
            const yearQuery = typeof year === "string" ? year.trim().toLowerCase() : "";
            const ratingQuery = typeof rating === "string" ? rating.trim().toLowerCase() : "";
            const trackQuery = typeof track === "string" ? track.trim().toLowerCase() : "";
            const lengthQuery = typeof length === "string" ? length.trim().toLowerCase() : "";
        
            let result = videosData.filter((video) => {
                return (
                    (titleQuery ? video.name.toLowerCase().includes(titleQuery) : true) &&
                    (typeQuery ? video.type.toLowerCase() === typeQuery : true) &&
                    (yearQuery ? video.year.toLowerCase() === yearQuery : true) &&
                    (ratingQuery ? video.rating.toLowerCase() === ratingQuery : true) &&
                    (trackQuery ? video.track.toLowerCase() === trackQuery : true) &&
                    (lengthQuery ? video.length.toLowerCase().includes(lengthQuery) : true)
                );
            });
        
            // console.log('result', JSON.parse(JSON.stringify(result)));
        
            const tabId = generateId();
            state.tabs.push({ id: tabId, type: "video", input, result });
            state.activeTab = tabId;
        },
        

        
    }
});


const store = configureStore({
    reducer: {
        tab: slice.reducer,
    },
});

export default store;
export const {setAudioTab, setVideoTab, setNewActiveTab, makeActiveTabNull, deleteTab, setNewActiveRow, makeActiveRowNull} = slice.actions