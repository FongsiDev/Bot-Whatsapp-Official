{ pkgs }: {
	deps = with pkgs; [
		nodejs
		nodePackages.typescript-language-server
		nodePackages.node-pre-gyp
		libpng
		libjpeg
		libuuid
    ffmpeg.bin
    imagemagick
	];
  env = {
    LD_LIBRARY_PATH = 
    pkgs.lib.makeLibraryPath [pkgs.libuuid];
  }; 
}