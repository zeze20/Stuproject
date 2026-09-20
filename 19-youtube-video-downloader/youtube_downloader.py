"""YouTube videolarını indirme aracı (YouTube Video Downloader).

`yt-dlp` kütüphanesini kullanır. Yalnızca kendi videolarınızı veya indirme
izniniz olan / telif hakkı sorunu olmayan içerikleri indirin. Videonun
sahibinin haklarına ve YouTube'un kullanım koşullarına uymak sizin
sorumluluğunuzdadır.
"""

import sys

try:
    import yt_dlp
except ImportError:
    print("yt-dlp kurulu değil. Kurmak için: pip install -r requirements.txt")
    sys.exit(1)


def download_video(url, output_dir="downloads"):
    ydl_opts = {
        "outtmpl": f"{output_dir}/%(title)s.%(ext)s",
        "format": "best",
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])


def main():
    print("=== YouTube Video İndirici ===")
    print("Yalnızca indirme izniniz olan içerikleri indirin.\n")
    url = input("Video URL: ").strip()
    if not url:
        print("Geçersiz URL.")
        return

    try:
        download_video(url)
        print("İndirme tamamlandı.")
    except Exception as e:
        print(f"İndirme başarısız: {e}")


if __name__ == "__main__":
    main()
