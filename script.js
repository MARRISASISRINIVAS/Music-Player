const songs = [
  { title: "Energetic Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", lyrics: "Feel the energy 🎵", image: "https://i.ibb.co/kyMNYxp/devara.jpg" },
  { title: "Rhythm Rise", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", lyrics: "The rhythm that moves you 💃", image: "https://i.ibb.co/BGVwRJw/pushpa.jpg" },
  { title: "Power Vibes", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", lyrics: "Vibes of power 🔥", image: "https://i.ibb.co/xHg4hFr/hukum.jpg" },
  { title: "Hero Anthem", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", lyrics: "March of the hero 🦸", image: "https://i.ibb.co/KzChqDF/vikram.jpg" },
  { title: "Island Grooves", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", lyrics: "Tropical beats 🌴", image: "https://i.ibb.co/Zx8tfcF/arabic.jpg" },
  { title: "Romantic Vibe", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", lyrics: "Romantic mood on ❤️", image: "https://i.ibb.co/TgJt13r/tumtum.jpg" },
  { title: "Summer Dreams", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3", lyrics: "Summer vibes all day 🌞", image: "https://i.ibb.co/kyMNYxp/devara.jpg" },
  { title: "Dance Floor", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3", lyrics: "Move to the groove 🕺", image: "https://i.ibb.co/BGVwRJw/pushpa.jpg" },
  { title: "Chill Mode", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3", lyrics: "Relax and unwind 😌", image: "https://i.ibb.co/xHg4hFr/hukum.jpg" },
  { title: "Night Beats", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3", lyrics: "Late night vibes 🌙", image: "https://i.ibb.co/KzChqDF/vikram.jpg" },
  { title: "Morning Coffee", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3", lyrics: "Wake up and shine ☕", image: "https://i.ibb.co/Zx8tfcF/arabic.jpg" },
  { title: "Urban Flow", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3", lyrics: "City life rhythm 🌆", image: "https://i.ibb.co/TgJt13r/tumtum.jpg" },
  { title: "Beach Party", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3", lyrics: "Sandy toes, salty air 🏖️", image: "https://i.ibb.co/kyMNYxp/devara.jpg" },
  { title: "Sunset Drive", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3", lyrics: "Cruising at sunset 🌅", image: "https://i.ibb.co/BGVwRJw/pushpa.jpg" },
  { title: "Workout Mix", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3", lyrics: "Push your limits 💪", image: "https://i.ibb.co/xHg4hFr/hukum.jpg" },
  { title: "Rainy Day", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3", lyrics: "Peaceful rain sounds 🌧️", image: "https://i.ibb.co/KzChqDF/vikram.jpg" },
  { title: "Party Time", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3", lyrics: "Let's celebrate 🎉", image: "https://i.ibb.co/Zx8tfcF/arabic.jpg" },
  { title: "Midnight Jazz", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3", lyrics: "Smooth jazz vibes 🎷", image: "https://i.ibb.co/TgJt13r/tumtum.jpg" },
  { title: "Road Trip", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-19.mp3", lyrics: "Adventure awaits 🚗", image: "https://i.ibb.co/kyMNYxp/devara.jpg" },
  { title: "Meditation", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-20.mp3", lyrics: "Find your peace 🧘", image: "https://i.ibb.co/BGVwRJw/pushpa.jpg" },
  { title: "Electric Dreams", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-21.mp3", lyrics: "Electronic vibes ⚡", image: "https://i.ibb.co/xHg4hFr/hukum.jpg" },
  { title: "Forest Walk", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-22.mp3", lyrics: "Nature's melody 🌳", image: "https://i.ibb.co/KzChqDF/vikram.jpg" },
  { title: "Space Journey", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-23.mp3", lyrics: "Cosmic adventure 🚀", image: "https://i.ibb.co/Zx8tfcF/arabic.jpg" },
  { title: "Ocean Waves", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-24.mp3", lyrics: "Seaside serenity 🌊", image: "https://i.ibb.co/TgJt13r/tumtum.jpg" },
  { title: "Mountain High", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-25.mp3", lyrics: "Peak performance 🏔️", image: "https://i.ibb.co/kyMNYxp/devara.jpg" },
  { title: "Desert Wind", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-26.mp3", lyrics: "Sandy rhythms 🐪", image: "https://i.ibb.co/BGVwRJw/pushpa.jpg" },
  { title: "City Lights", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-27.mp3", lyrics: "Urban nightlife 🌃", image: "https://i.ibb.co/xHg4hFr/hukum.jpg" },
  { title: "Garden Peace", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-28.mp3", lyrics: "Floral harmony 🌸", image: "https://i.ibb.co/KzChqDF/vikram.jpg" },
  { title: "Rainbow Melody", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-29.mp3", lyrics: "Colorful tunes 🌈", image: "https://i.ibb.co/Zx8tfcF/arabic.jpg" },
  { title: "Starlight", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-30.mp3", lyrics: "Night sky dreams ⭐", image: "https://i.ibb.co/TgJt13r/tumtum.jpg" },
  { title: "Winter Wonderland", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-31.mp3", lyrics: "Snowy beats ❄️", image: "https://i.ibb.co/kyMNYxp/devara.jpg" },
  { title: "Spring Bloom", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-32.mp3", lyrics: "Fresh beginnings 🌱", image: "https://i.ibb.co/BGVwRJw/pushpa.jpg" },
  { title: "Autumn Leaves", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-33.mp3", lyrics: "Fall vibes 🍂", image: "https://i.ibb.co/xHg4hFr/hukum.jpg" },
  { title: "Moonlight Sonata", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-34.mp3", lyrics: "Lunar melodies 🌕", image: "https://i.ibb.co/KzChqDF/vikram.jpg" },
  { title: "Sunrise Serenade", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-35.mp3", lyrics: "Morning glory 🌄", image: "https://i.ibb.co/Zx8tfcF/arabic.jpg" },
  { title: "Twilight Dreams", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-36.mp3", lyrics: "Evening peace 🌆", image: "https://i.ibb.co/TgJt13r/tumtum.jpg" }
];

let currentIndex = 0;
let isPlaying = false;
let isShuffleOn = false;
let repeatMode = 'none';
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let playlists = JSON.parse(localStorage.getItem('playlists')) || {};
let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];

const audioPlayer = document.getElementById('audioPlayer');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const lyricsDiv = document.getElementById('lyrics');
const songListDiv = document.getElementById('songList');
const themeSwitch = document.getElementById('themeSwitch');
const volumeControl = document.getElementById('volumeControl');
const progressBar = document.getElementById('progressBar');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const playPauseBtn = document.getElementById('playPauseBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const searchInput = document.getElementById('searchInput');

function displaySongs(filtered = songs) {
  songListDiv.innerHTML = '';
  if (filtered.length === 0) {
    songListDiv.innerHTML = '<p>No song found 😢</p>';
    return;
  }

  filtered.forEach((song, index) => {
    const div = document.createElement('div');
    div.className = 'song';
    const isFavorite = favorites.includes(song.title);
    div.innerHTML = `
      <img src="${song.image}" alt="${song.title}" class="song-thumbnail"/>
      <strong>${song.title}</strong><br/>
      <div class="song-controls">
        <button onclick="playSong(${index})" class="play-btn">
          ${currentIndex === index && isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>'}
        </button>
        <button onclick="toggleFavorite('${song.title}')" class="favorite-btn">
          ${isFavorite ? '❤️' : '🤍'}
        </button>
        <button onclick="addToPlaylist('${song.title}')" class="playlist-btn">
          <i class="fas fa-list-plus"></i>
        </button>
        <a href="${song.url}" download><button class="download-btn"><i class="fas fa-download"></i></button></a>
      </div>
    `;
    songListDiv.appendChild(div);
  });
}
// Update the voice recognition result handler
function startVoiceRecognition() {
  const micIcon = document.getElementById('micIcon');
  
  if (!('webkitSpeechRecognition' in window)) {
    showNotification('Voice recognition not supported in this browser 😢');
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  micIcon.style.color = '#1db954';

  recognition.onstart = () => {
    showNotification('Listening... 🎤');
  };

  recognition.onresult = (event) => {
    const searchTerm = event.results[0][0].transcript.toLowerCase();
    document.getElementById('searchInput').value = searchTerm;
    
    // Improved search filtering
    const filteredSongs = songs.filter(song => 
      song.title.toLowerCase().includes(searchTerm) ||
      song.lyrics.toLowerCase().includes(searchTerm)
    );

    if (filteredSongs.length === 0) {
      showNotification(`No songs found for: "${searchTerm}" 😢`);
    } else {
      showNotification(`Found ${filteredSongs.length} songs 🎵`);
    }
    
    displaySongs(filteredSongs);
  };

  recognition.onerror = (event) => {
    showNotification('Error: ' + event.error);
    micIcon.style.color = '';
  };

  recognition.onend = () => {
    micIcon.style.color = '';
  };

  recognition.start();
}

// Update the search input event listener to use the same search logic
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchTerm) ||
    song.lyrics.toLowerCase().includes(searchTerm)
  );
  displaySongs(filteredSongs);
});

function displayFavorites() {
  const favoriteSongs = songs.filter(song => favorites.includes(song.title));
  displaySongs(favoriteSongs);
  updateActiveTabs('Favorites');
}

function displayRecentSongs() {
  if (recentlyPlayed.length === 0) {
    songListDiv.innerHTML = '<p>No recent songs played 😊</p>';
    return;
  }
  displaySongs(recentlyPlayed);
  updateActiveTabs('Recent');
}

function updateActiveTabs(activeTab) {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent === activeTab) {
      btn.classList.add('active');
    }
  });
}


function playSong(index) {
  currentIndex = index;
  const song = songs[index];
  
  // Add to recently played
  const recentIndex = recentlyPlayed.findIndex(s => s.title === song.title);
  if (recentIndex !== -1) {
    recentlyPlayed.splice(recentIndex, 1);
  }
  recentlyPlayed.unshift(song);
  if (recentlyPlayed.length > 10) {
    recentlyPlayed.pop();
  }
  localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
  
  audioPlayer.src = song.url;
  albumArt.style.backgroundImage = `url(${song.image})`;
  albumArt.style.backgroundSize = 'cover';
  albumArt.style.backgroundPosition = 'center';
  albumArt.innerHTML = '';
  songTitle.innerText = song.title;
  lyricsDiv.innerHTML = song.lyrics;

  audioPlayer.play()
    .then(() => {
      isPlaying = true;
      updatePlayPauseButton();
      displaySongs();
    })
    .catch(error => showNotification('Playback error: ' + error.message));
}

function nextSong() {
  let nextIndex;
  if (isShuffleOn) {
    nextIndex = Math.floor(Math.random() * songs.length);
  } else {
    nextIndex = (currentIndex + 1) % songs.length;
  }
  playSong(nextIndex);
}

function previousSong() {
  let prevIndex;
  if (isShuffleOn) {
    prevIndex = Math.floor(Math.random() * songs.length);
  } else {
    prevIndex = (currentIndex - 1 + songs.length) % songs.length;
  }
  playSong(prevIndex);
}

function togglePlayPause() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    isPlaying = true;
  } else {
    audioPlayer.pause();
    isPlaying = false;
  }
  updatePlayPauseButton();
}

function updatePlayPauseButton() {
  playPauseBtn.innerHTML = isPlaying ? 
    '<i class="fas fa-pause"></i>' : 
    '<i class="fas fa-play"></i>';
}

function toggleShuffle() {
  isShuffleOn = !isShuffleOn;
  shuffleBtn.style.color = isShuffleOn ? '#1db954' : '';
  showNotification(isShuffleOn ? 'Shuffle On' : 'Shuffle Off');
}

function toggleRepeat() {
  switch(repeatMode) {
    case 'none':
      repeatMode = 'one';
      repeatBtn.style.color = '#1db954';
      repeatBtn.textContent = '🔂';
      break;
    case 'one':
      repeatMode = 'all';
      repeatBtn.style.color = '#1db954';
      repeatBtn.textContent = '🔁';
      break;
    case 'all':
      repeatMode = 'none';
      repeatBtn.style.color = '';
      repeatBtn.textContent = '🔁';
      break;
  }
  showNotification(`Repeat: ${repeatMode}`);
}

function toggleFavorite(title) {
  const index = favorites.indexOf(title);
  if (index === -1) {
    favorites.push(title);
    showNotification('Added to favorites ❤️');
  } else {
    favorites.splice(index, 1);
    showNotification('Removed from favorites 🤍');
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  displaySongs();
}

function displayPlaylists() {
  songListDiv.innerHTML = `
    <div class="playlist-header">
      <h2>Playlists</h2>
      <button onclick="createPlaylist()" class="create-playlist-btn">
        <i class="fas fa-plus"></i> Create Playlist
      </button>
    </div>
    <div class="playlists-container">
      ${Object.keys(playlists).length === 0 ? 
        '<p>No playlists created yet 🎵</p>' :
        Object.entries(playlists).map(([name, songs]) => `
          <div class="playlist-item">
            <h3>${name}</h3>
            <p>${songs.length} songs</p>
            <button onclick="showPlaylist('${name}')" class="view-playlist-btn">
              <i class="fas fa-play"></i> Play
            </button>
          </div>
        `).join('')
      }
    </div>
  `;
  updateActiveTabs('Playlists');
}

function createPlaylist() {
  const name = prompt('Enter playlist name:');
  if (name && name.trim()) {
    playlists[name] = [];
    localStorage.setItem('playlists', JSON.stringify(playlists));
    displayPlaylists();
    showNotification('Playlist created! 🎵');
  }
}

function showPlaylist(playlistName) {
  const playlistSongs = playlists[playlistName];
  const filteredSongs = songs.filter(song => playlistSongs.includes(song.title));
  
  songListDiv.innerHTML = `
    <div class="playlist-header">
      <h2>${playlistName}</h2>
      <button onclick="displayPlaylists()" class="back-btn">
        <i class="fas fa-arrow-left"></i> Back
      </button>
    </div>
  `;
  
  displaySongs(filteredSongs);
}

function addToPlaylist(songTitle) {
  const playlistNames = Object.keys(playlists);
  if (playlistNames.length === 0) {
    showNotification('Create a playlist first! 🎵');
    return;
  }
  
  const playlistMenu = document.createElement('div');
  playlistMenu.className = 'playlist-menu';
  playlistMenu.innerHTML = `
    <h3>Add to Playlist</h3>
    ${playlistNames.map(name => `
      <button onclick="addSongToPlaylist('${songTitle}', '${name}')" class="playlist-option">
        ${name}
      </button>
    `).join('')}
    <button onclick="this.parentElement.remove()" class="cancel-btn">Cancel</button>
  `;
  
  document.body.appendChild(playlistMenu);
}

function addSongToPlaylist(songTitle, playlistName) {
  if (!playlists[playlistName].includes(songTitle)) {
    playlists[playlistName].push(songTitle);
    localStorage.setItem('playlists', JSON.stringify(playlists));
    showNotification(`Added to ${playlistName} 🎵`);
  }
  document.querySelector('.playlist-menu').remove();
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.getElementById('notifications').appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('active');
}

function showSettings() {
  const modal = document.getElementById('settingsModal');
  modal.style.display = 'block';
  document.getElementById('sidebar').classList.remove('active');
}

function closeSettings() {
  document.getElementById('settingsModal').style.display = 'none';
}

// Event Listeners
audioPlayer.addEventListener('timeupdate', () => {
  if (!audioPlayer.duration) return;
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value = progress;
  currentTimeSpan.textContent = formatTime(audioPlayer.currentTime);
  durationSpan.textContent = formatTime(audioPlayer.duration);
});

progressBar.addEventListener('input', () => {
  const time = (progressBar.value / 100) * audioPlayer.duration;
  audioPlayer.currentTime = time;
});

audioPlayer.addEventListener('ended', () => {
  switch(repeatMode) {
    case 'one':
      audioPlayer.currentTime = 0;
      audioPlayer.play();
      break;
    case 'all':
      nextSong();
      break;
    case 'none':
      if (currentIndex < songs.length - 1) {
        nextSong();
      }
      break;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    togglePlayPause();
  } else if (e.code === 'ArrowRight') {
    nextSong();
  } else if (e.code === 'ArrowLeft') {
    previousSong();
  }
});

volumeControl.addEventListener('input', () => {
  audioPlayer.volume = volumeControl.value;
  localStorage.setItem('volume', volumeControl.value);
});

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(searchTerm)
  );
  displaySongs(filteredSongs);
});

document.addEventListener('click', (e) => {
  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.querySelector('.menu-btn');
  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {
    sidebar.classList.remove('active');
  }
});

document.getElementById('themeSelect').addEventListener('change', (e) => {
  const isDark = e.target.value === 'dark';
  document.body.classList.toggle('dark-mode', !isDark);
  localStorage.setItem('darkMode', !isDark);
});

document.addEventListener('DOMContentLoaded', () => {
  volumeControl.value = localStorage.getItem('volume') || 1;
  audioPlayer.volume = volumeControl.value;
  
  const darkMode = localStorage.getItem('darkMode') === 'true';
  themeSwitch.checked = darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  
  const themeSelect = document.getElementById('themeSelect');
  themeSelect.value = darkMode ? 'light' : 'dark';
  
  displaySongs();
});