
// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

var monoSpace = '```'

exports.listmenu = (sender,prefix,ad,namenya,premnya,usernya,romnya,tanggal,jam) => {
return` ββββ² ππππΌπ½ππ β³βββ
β£β( π¨π¦ππ₯ ππ‘ππ’ )
ββ€ ID : @${sender.split('@')[0]}
ββ€ Nama : ${namenya}
ββ€ Premium : ${premnya}
β£ββββββββββββββ
β£β( ππ’π§ ππ‘ππ’ )
ββ€ Library : Baileys-MD
ββ€ Time : ${jam} WIB
ββ€ Date : ${tanggal}
ββ€ Terdaftar : ${usernya}
ββ€ Room Chat : ${romnya}
ββ€ Total Fitur : 600+
β£βββββββββββββ
β£ββ² ππΌππ ππππ β³
ββ’ ${prefix}menu
ββ’ ${prefix}iklan
ββ’ ${prefix}rules
ββ’ ${prefix}owner
ββ’ ${prefix}script
ββ’ ${prefix}infobot
ββ’ ${prefix}donasi
ββ’ ${prefix}donate
ββ’ ${prefix}sewabot
ββ’ ${prefix}groupbot
ββ’ ${prefix}ownerinfo
ββ’ ${prefix}infoowner
β£ββββββββββββββ
β£ββ² ππππ ππππ β³
ββ’ ${prefix}verify
ββ’ ${prefix}report
ββ’ ${prefix}request
ββ’ ${prefix}transfer
ββ’ ${prefix}menfess
ββ’ ${prefix}buatroom
ββ’ ${prefix}secretchat
ββ’ ${prefix}cekprem
ββ’ ${prefix}daftarprem
ββ’ ${prefix}changename
β£ββββββββββββββ
β£ββ² πππππ ππππ β³
ββ’ ${prefix}error
ββ’ ${prefix}clearerr
ββ’ ${prefix}siaran
ββ’ ${prefix}session
ββ’ ${prefix}resetdb
ββ’ ${prefix}runtime
ββ’ ${prefix}setexif
ββ’ ${prefix}setwm
ββ’ ${prefix}setfooter
ββ’ ${prefix}setapikey
ββ’ ${prefix}setppbot
ββ’ ${prefix}addprem
ββ’ ${prefix}delprem
ββ’ ${prefix}bc
ββ’ ${prefix}bctext
ββ’ ${prefix}bcvideo
ββ’ ${prefix}bcaudio
ββ’ ${prefix}bcimage
ββ’ ${prefix}broadcast
β£ββββββββββββββ
β£ββ² πππππ ππππ β³
ββ’ ${prefix}kali 1 2
ββ’ ${prefix}bagi 1 2
ββ’ ${prefix}kurang 1 2
ββ’ ${prefix}tambah 1 2
ββ’ ${prefix}dellist key
ββ’ ${prefix}addlist key@response
ββ’ ${prefix}update key@response
ββ’ ${prefix}done <reply orderan>
ββ’ ${prefix}proses <reply orderan>
ββ’ ${prefix}list <only group>
ββ’ ${prefix}shop <only group>
β£ββββββββββββββ
β£ββ² πππππ ππππ β³
ββ’ ${prefix}fitnah
ββ’ ${prefix}delete
ββ’ ${prefix}revoke
ββ’ ${prefix}tagall
ββ’ ${prefix}hidetag
ββ’ ${prefix}setdesc
ββ’ ${prefix}linkgrup
ββ’ ${prefix}infogroup
ββ’ ${prefix}setppgrup
ββ’ ${prefix}setnamegrup
ββ’ ${prefix}group open
ββ’ ${prefix}group close
ββ’ ${prefix}antilink on
ββ’ ${prefix}antilink off
ββ’ ${prefix}welcome on
ββ’ ${prefix}welcome off
ββ’ ${prefix}tiktokauto on
ββ’ ${prefix}tiktokauto off
ββ’ ${prefix}kick @tag
ββ’ ${prefix}demote @tag
ββ’ ${prefix}promote @tag
β£ββββββββββββββ
β£ββ² πΌππππΏππΎπ ππππ β³
ββ’ ${prefix}sadcat
ββ’ ${prefix}translate
ββ’ ${prefix}stalkff
ββ’ ${prefix}stalknpm
ββ’ ${prefix}stalkgithub
ββ’ ${prefix}balikhuruf
ββ’ ${prefix}balikangka
ββ’ ${prefix}besarkecil
ββ’ ${prefix}bilangangka
β£ββββββββββββββ
β£ββ² πΏππππππΌπΏ ππππ β³
ββ’ ${prefix}tiktok
ββ’ ${prefix}ytmp3
ββ’ ${prefix}ytmp4
ββ’ ${prefix}pinterest
ββ’ ${prefix}playmp3
ββ’ ${prefix}playmp4
ββ’ ${prefix}gitclone
ββ’ ${prefix}mediafire
ββ’ ${prefix}wikimedia
ββ’ ${prefix}soundcloud
ββ’ ${prefix}infogempa
β£ββββββββββββββ
β£ββ² πΎππππππ ππππ β³
ββ’ ${prefix}tts
ββ’ ${prefix}ttp
ββ’ ${prefix}ttp2
ββ’ ${prefix}attp
ββ’ ${prefix}attp2
ββ’ ${prefix}tourl
ββ’ ${prefix}upload
ββ’ ${prefix}toimg
ββ’ ${prefix}toimage
ββ’ ${prefix}tomp3
ββ’ ${prefix}toaudio
ββ’ ${prefix}tomp4
ββ’ ${prefix}tovideo
ββ’ ${prefix}emojimix
ββ’ ${prefix}emojmix
ββ’ ${prefix}emojinua
ββ’ ${prefix}mixemoji
ββ’ ${prefix}stiker
ββ’ ${prefix}sticker
ββ’ ${prefix}sgif
ββ’ ${prefix}stikergif
ββ’ ${prefix}stickergif
ββ’ ${prefix}swm
ββ’ ${prefix}stikerwm
ββ’ ${prefix}stickerwm
ββ’ ${prefix}smeme
ββ’ ${prefix}memestiker
ββ’ ${prefix}stikermeme
ββ’ ${prefix}stickermeme
ββ’ ${prefix}takesticker
ββ’ ${prefix}emojinua2
ββ’ ${prefix}mixemoji2
ββ’ ${prefix}emojmix2
ββ’ ${prefix}emojimix2
β£ββββββββββββββ
β£ββ² πππππ ππππ β³
ββ’ ${prefix}spamcall
ββ’ ${prefix}translate
ββ’ ${prefix}ssweb-pc
ββ’ ${prefix}ssweb-hp
ββ’ ${prefix}bitly_short
ββ’ ${prefix}cuttly_short
ββ’ ${prefix}tinyurl_short
ββ’ ${prefix}base32
ββ’ ${prefix}base64
ββ’ ${prefix}debase32
ββ’ ${prefix}debase64
β£ββββββββββββββ
β£ββ² π½πππππ ππππ β³
ββ’ ${prefix}sendbug 628xxx
ββ’ ${prefix}philips 628xxx
ββ’ ${prefix}philips2 628xxx
ββ’ ${prefix}philips3 628xxx
ββ’ ${prefix}santet @tag
ββ’ ${prefix}santet2 @tag
ββ’ ${prefix}santet3 @tag
ββ’ ${prefix}virtex 628xxx
ββ’ ${prefix}virtex2 628xxx
ββ’ ${prefix}virtex3 628xxx
ββ’ ${prefix}bug1 628xxx
ββ’ ${prefix}bug2 628xxx
ββ’ ${prefix}bug3 628xxx
ββ’ ${prefix}bug4 628xxx
ββ’ ${prefix}bug5 628xxx
β£ββββββββββββββ
β£ββ² ππΌππΏππ πΎππ β³
ββ’ ${prefix}cekjelek
ββ’ ${prefix}cekcantik
ββ’ ${prefix}cekganteng
ββ’ ${prefix}ceksad
ββ’ ${prefix}cekharam
ββ’ ${prefix}cekhalal
ββ’ ${prefix}cekbego
ββ’ ${prefix}cekanjing
ββ’ ${prefix}cekbiadab
ββ’ ${prefix}cekramah
ββ’ ${prefix}ceksatir
ββ’ ${prefix}cekmanis
ββ’ ${prefix}cekpahit
ββ’ ${prefix}cekhitam
ββ’ ${prefix}cekrasis
ββ’ ${prefix}cekbaik
ββ’ ${prefix}cekjahat
ββ’ ${prefix}cekkaya
ββ’ ${prefix}cekmiskin
ββ’ ${prefix}cekpintar
ββ’ ${prefix}cekbodoh
ββ’ ${prefix}cekimut
ββ’ ${prefix}cekkocak
ββ’ ${prefix}cekkadang
β£ββββββββββββββ
β£ββ² πππππππππΌπ ππππ β³
ββ’ ${prefix}toloserti <nama>
ββ’ ${prefix}badgirlserti <nama>
ββ’ ${prefix}goodgirlserti <nama>
ββ’ ${prefix}fuckgirlserti <nama>
ββ’ ${prefix}bucinserti <nama>
β£ββββββββββββββ
β£ββ² ππππ ππΌπππ β³
ββ’ ${prefix}joker
ββ’ ${prefix}digital
ββ’ ${prefix}nulis
ββ’ ${prefix}nulis2
ββ’ ${prefix}quoteser
ββ’ ${prefix}quobucin
ββ’ ${prefix}rem
ββ’ ${prefix}girlneko
ββ’ ${prefix}sadboy
ββ’ ${prefix}kaneki
ββ’ ${prefix}lolimaker
β£ββββββββββββββ
β£ββ² πΌππππππππ ππππ β³
ββ’ ${prefix}buatroom 628xxx
ββ’ ${prefix}room <only owner>
ββ’ ${prefix}stopchat <only room>
ββ’ ${prefix}menfess 628xx|bot|hai
β£ββββββββββββββ
β£ββ² ππππππΏ ππππ β³
ββ’ ${prefix}pricelist <layanan>
ββ’ ${prefix}order <cara order>
ββ’ ${prefix}like jumlah|target
ββ’ ${prefix}view jumlah|target
ββ’ ${prefix}follower jumlah|username
ββ’ ${prefix}cekstatus <idtrx>
ββ’ ${prefix}komisi <owner only>
ββ’ ${prefix}tarikkomisi <owner only>
β£ββββββββββββββ
β£ββ² ππππΌπ ππππ β³
ββ’ ${prefix}hilih <text>
ββ’ ${prefix}halah <text>
ββ’ ${prefix}huluh <text>
ββ’ ${prefix}heleh <text>
ββ’ ${prefix}holoh <text>
β£ββββββββββββββ
β£ββ² ππΌππΏππ ππππ β³
ββ’ ${prefix}cecan
ββ’ ${prefix}cogan
ββ’ ${prefix}mobil
ββ’ ${prefix}islamic
ββ’ ${prefix}darkjokes
ββ’ ${prefix}boneka
ββ’ ${prefix}wallhp
ββ’ ${prefix}tatasurya
ββ’ ${prefix}programing
β£ββββββββββββββ
β£ββ² πππππ½ππ ππππ β³
ββ’ ${prefix}ramaljodoh
ββ’ ${prefix}ramalanjodoh
ββ’ ${prefix}nomorhoki
ββ’ ${prefix}artimimpi
ββ’ ${prefix}artinama
ββ’ ${prefix}sifatusaha
ββ’ ${prefix}tafsirmimpi
ββ’ ${prefix}pasangan
ββ’ ${prefix}suamiistri
ββ’ ${prefix}ramalcinta
ββ’ ${prefix}ramalancinta
ββ’ ${prefix}ramaljodohbali
ββ’ ${prefix}ramalanjodohbali
ββ’ ${prefix}cocoknama
ββ’ ${prefix}kecocokannama
ββ’ ${prefix}cocokpasangan
ββ’ ${prefix}kecocokanpasangan
β£ββββββββββββββ
β£ββ² πΌππππΌπ ππΌπΎππΌ β³
ββ’ ${prefix}rika
ββ’ ${prefix}bocil
ββ’ ${prefix}ukhty
ββ’ ${prefix}santuy
ββ’ ${prefix}hijaber
β£ββββββββββββββ
β£ββ² πΌππΏππ πΎππΌππππ β³
ββ’ ${prefix}fat
ββ’ ${prefix}fast
ββ’ ${prefix}slow
ββ’ ${prefix}bass
ββ’ ${prefix}deep
ββ’ ${prefix}tupai
ββ’ ${prefix}robot
ββ’ ${prefix}blown
ββ’ ${prefix}smooth
ββ’ ${prefix}earrape
ββ’ ${prefix}reverse
ββ’ ${prefix}nightcore
β£ββββββββββββββ
β£ββ² πππππππΌππππ ππππ β³
ββ’ ${prefix}gempa
ββ’ ${prefix}jadwaltv
ββ’ ${prefix}gempanow
ββ’ ${prefix}bioskopnow
ββ’ ${prefix}latintoaksara
ββ’ ${prefix}aksaratolatin
β£ββββββββββββββ
β£ββ² ππΌππΏππ ππππΎπππ β³
ββ’ ${prefix}dadu
ββ’ ${prefix}anjing
ββ’ ${prefix}patrick
ββ’ ${prefix}bucinstick
ββ’ ${prefix}gawrgura
ββ’ ${prefix}amongus
β£ββββββββββββββ
β£ββ² πΌππΏππ ππππ β³
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
ββ’ ${prefix}audio${ad++}
β£ββββββββββββββ
β£ββ² πππ ππππ β³
ββ’ ${prefix}goblokcek 
ββ’ ${prefix}jelekcek 
ββ’ ${prefix}gaycek
ββ’ ${prefix}lesbicek
ββ’ ${prefix}gantengcek 
ββ’ ${prefix}cantikcek
ββ’ ${prefix}begocek 
ββ’ ${prefix}suhucek
ββ’ ${prefix}pintercek
ββ’ ${prefix}jagocek
ββ’ ${prefix}nolepcek
ββ’ ${prefix}babicek
ββ’ ${prefix}bebancek
ββ’ ${prefix}baikcek
ββ’ ${prefix}jahatcek
ββ’ ${prefix}anjingcek
ββ’ ${prefix}haramcek
ββ’ ${prefix}pakboycek
ββ’ ${prefix}pakgirlcek
ββ’ ${prefix}sangecek 
ββ’ ${prefix}bapercek
ββ’ ${prefix}fakboycek
ββ’ ${prefix}alimcek
ββ’ ${prefix}suhucek
ββ’ ${prefix}fakgirlcek
ββ’ ${prefix}kerencek
ββ’ ${prefix}wibucek
β£ββββββββββββββ
β£ββ² ππΌππππΌπππ ππππ β³
ββ’ ${prefix}milf
ββ’ ${prefix}loli
ββ’ ${prefix}wallml
ββ’ ${prefix}waifu
ββ’ ${prefix}husbu
ββ’ ${prefix}cosplay
ββ’ ${prefix}ppcouple
ββ’ ${prefix}wallpaperislami
ββ’ ${prefix}wallpaperinori
ββ’ ${prefix}wallpaperanime
ββ’ ${prefix}wallpapergamer
ββ’ ${prefix}wallpapermeme
ββ’ ${prefix}wallpaperprogamer
ββ’ ${prefix}wallpaperteknologi
ββ’ ${prefix}wallpapercyber
β£ββββββββββββββ
β£ββ² πΌππππ ππππ β³
ββ’ ${prefix}cry
ββ’ ${prefix}hug
ββ’ ${prefix}pat
ββ’ ${prefix}bully
ββ’ ${prefix}lick
ββ’ ${prefix}kiss
ββ’ ${prefix}awoo
ββ’ ${prefix}waifu
ββ’ ${prefix}shinobu
ββ’ ${prefix}cuddle
ββ’ ${prefix}megumin
ββ’ ${prefix}slap
ββ’ ${prefix}neko
ββ’ ${prefix}wink
ββ’ ${prefix}dance
ββ’ ${prefix}poke
ββ’ ${prefix}glomp
ββ’ ${prefix}bite
ββ’ ${prefix}nom
ββ’ ${prefix}handhold
ββ’ ${prefix}highfive
ββ’ ${prefix}wave
ββ’ ${prefix}smug
ββ’ ${prefix}smile
ββ’ ${prefix}bonk
β£ββββββββββββββ
β£ββ² πΎπππππ ππππ β³
ββ’ ${prefix}cerpen-sejarah
ββ’ ${prefix}cerpen-sedih
ββ’ ${prefix}cerpen-sastra
ββ’ ${prefix}cerpen-romantis
ββ’ ${prefix}cerpen-rohani
ββ’ ${prefix}cerpen-rindu
ββ’ ${prefix}cerpen-remaja
ββ’ ${prefix}cerpen-ramadhan
ββ’ ${prefix}cerpen-petualangan
ββ’ ${prefix}cerpen-persahabatan
ββ’ ${prefix}cerpen-perpisahan
ββ’ ${prefix}cerpen-perjuangan
ββ’ ${prefix}cerpen-penyesalan
ββ’ ${prefix}cerpen-pengorbanan
ββ’ ${prefix}cerpen-pengalaman
ββ’ ${prefix}cerpen-pendidikan
ββ’ ${prefix}cerpen-penantian
ββ’ ${prefix}cerpen-patahhati
ββ’ ${prefix}cerpen-olahraga
ββ’ ${prefix}cerpen-nasionalisme
ββ’ ${prefix}cerpen-nasihat
ββ’ ${prefix}cerpen-motivasi
ββ’ ${prefix}cerpen-misteri
ββ’ ${prefix}cerpen-mengharukan
ββ’ ${prefix}cerpen-malaysia
ββ’ ${prefix}cerpen-liburan
ββ’ ${prefix}cerpen-kristen
ββ’ ${prefix}cerpen-korea
ββ’ ${prefix}cerpen-kisahnyata
ββ’ ${prefix}cerpen-keluarga
ββ’ ${prefix}cerpen-kehidupan
ββ’ ${prefix}cerpen-jepang
ββ’ ${prefix}cerpen-inspiratif
ββ’ ${prefix}cerpen-gokil
ββ’ ${prefix}cerpen-galau
ββ’ ${prefix}cerpen-cintasejati
ββ’ ${prefix}cerpen-cintasegitiga
ββ’ ${prefix}cerpen-cintasedih
ββ’ ${prefix}cerpen-cintaromantis
ββ’ ${prefix}cerpen-cintapertama
ββ’ ${prefix}cerpen-cintaislami
ββ’ ${prefix}cerpen-cinta
ββ’ ${prefix}cerpen-budaya
ββ’ ${prefix}cerpen-bahasasunda
ββ’ ${prefix}cerpen-bahasajawa
ββ’ ${prefix}cerpen-bahasainggris
ββ’ ${prefix}cerpen-bahasadaerah
ββ’ ${prefix}cerpen-anak
β£ββββββββββββββ
β£ββ² ππππ ππππ β³
ββ’ ${prefix}yuri
ββ’ ${prefix}ero
ββ’ ${prefix}foot
ββ’ ${prefix}ass
ββ’ ${prefix}cuckold
ββ’ ${prefix}cum
ββ’ ${prefix}hentai
ββ’ ${prefix}gangbang
ββ’ ${prefix}femdom
ββ’ ${prefix}ahegao
ββ’ ${prefix}glasses
ββ’ ${prefix}jahy
ββ’ ${prefix}orgy
ββ’ ${prefix}pussy
ββ’ ${prefix}thighs
ββ’ ${prefix}panties
ββ’ ${prefix}thighs
ββ’ ${prefix}masturbation
ββ’ ${prefix}chiisaihentai
ββ’ ${prefix}trap
ββ’ ${prefix}blowjob
ββ’ ${prefix}yaoi
ββ’ ${prefix}ecchi
ββ’ ${prefix}hentai
ββ’ ${prefix}ahegao
ββ’ ${prefix}hololewd
ββ’ ${prefix}sideoppai
ββ’ ${prefix}animefeets
ββ’ ${prefix}animebooty
ββ’ ${prefix}animethighss
ββ’ ${prefix}hentaiparadise
ββ’ ${prefix}animearmpits
ββ’ ${prefix}hentaifemdom
ββ’ ${prefix}lewdanimegirls
ββ’ ${prefix}biganimetiddies
ββ’ ${prefix}animebellybutton
ββ’ ${prefix}hentai4everyone
β£ββββββββββββββ
β£ββ² πππππΏ ππππ β³
ββ’ ${prefix}sound1
ββ’ ${prefix}sound2
ββ’ ${prefix}sound3
ββ’ ${prefix}sound4
ββ’ ${prefix}sound5
ββ’ ${prefix}sound6
ββ’ ${prefix}sound7
ββ’ ${prefix}sound8
ββ’ ${prefix}sound9
ββ’ ${prefix}sound10
ββ’ ${prefix}sound11
ββ’ ${prefix}sound12
ββ’ ${prefix}sound13
ββ’ ${prefix}sound14
ββ’ ${prefix}sound15
ββ’ ${prefix}sound16
ββ’ ${prefix}sound17
ββ’ ${prefix}sound18
ββ’ ${prefix}sound19
ββ’ ${prefix}sound20
ββ’ ${prefix}sound21
ββ’ ${prefix}sound22
ββ’ ${prefix}sound23
ββ’ ${prefix}sound24
ββ’ ${prefix}sound25
ββ’ ${prefix}sound26
ββ’ ${prefix}sound27
ββ’ ${prefix}sound28
ββ’ ${prefix}sound29
ββ’ ${prefix}sound30
ββ’ ${prefix}sound31
ββ’ ${prefix}sound32
ββ’ ${prefix}sound33
ββ’ ${prefix}sound34
ββ’ ${prefix}sound35
ββ’ ${prefix}sound36
ββ’ ${prefix}sound37
ββ’ ${prefix}sound38
ββ’ ${prefix}sound39
ββ’ ${prefix}sound40
ββ’ ${prefix}sound41
ββ’ ${prefix}sound42
ββ’ ${prefix}sound43
ββ’ ${prefix}sound44
ββ’ ${prefix}sound45
ββ’ ${prefix}sound46
ββ’ ${prefix}sound47
ββ’ ${prefix}sound48
ββ’ ${prefix}sound49
ββ’ ${prefix}sound50
ββ’ ${prefix}sound51
ββ’ ${prefix}sound52
ββ’ ${prefix}sound53
ββ’ ${prefix}sound54
ββ’ ${prefix}sound55
ββ’ ${prefix}sound56
ββ’ ${prefix}sound57
ββ’ ${prefix}sound58
ββ’ ${prefix}sound59
ββ’ ${prefix}sound60
ββ’ ${prefix}sound61
ββ’ ${prefix}sound62
ββ’ ${prefix}sound63
ββ’ ${prefix}sound64
ββ’ ${prefix}sound65
ββ’ ${prefix}sound66
ββ’ ${prefix}sound67
ββ’ ${prefix}sound68
ββ’ ${prefix}sound69
ββ’ ${prefix}sound70
ββ’ ${prefix}sound71
ββ’ ${prefix}sound72
ββ’ ${prefix}sound73
ββ’ ${prefix}sound74
β£ββββββββββββββ
β£ββ² πππππππ ππππ β³
ββ’ ${prefix}metallic text
ββ’ ${prefix}naruto text
ββ’ ${prefix}butterfly text
ββ’ ${prefix}flaming text
ββ’ ${prefix}shadow text
ββ’ ${prefix}cup text
ββ’ ${prefix}cup1 text
ββ’ ${prefix}romance text
ββ’ ${prefix}smoke text
ββ’ ${prefix}burnpaper text
ββ’ ${prefix}lovemessage text
ββ’ ${prefix}undergrass text
ββ’ ${prefix}love text
ββ’ ${prefix}coffe text
ββ’ ${prefix}woodheart text
ββ’ ${prefix}woodenboard text
ββ’ ${prefix}summer3d text
ββ’ ${prefix}wolfmetal text
ββ’ ${prefix}nature3d text
ββ’ ${prefix}underwater text
ββ’ ${prefix}goldenrose text
ββ’ ${prefix}summernature text
ββ’ ${prefix}letterleaves text
ββ’ ${prefix}glowingneon text
ββ’ ${prefix}fallleaves text
ββ’ ${prefix}flamming text
ββ’ ${prefix}harrypotter text
ββ’ ${prefix}carvedwood text
ββ’ ${prefix}tiktok text1 text2
ββ’ ${prefix}arcade8bit text1 text2
ββ’ ${prefix}battlefield4 text1 text2
ββ’ ${prefix}pubg text1 text2
β£ββββββββββββββ
β£ββ² ππππππ ππππ β³
ββ’ ${prefix}wetglass text
ββ’ ${prefix}multicolor3d text
ββ’ ${prefix}watercolor text
ββ’ ${prefix}luxurygold text
ββ’ ${prefix}galaxywallpaper text
ββ’ ${prefix}lighttext text
ββ’ ${prefix}beautifulflower text
ββ’ ${prefix}puppycute text
ββ’ ${prefix}royaltext text
ββ’ ${prefix}heartshaped text
ββ’ ${prefix}birthdaycake text
ββ’ ${prefix}galaxystyle text
ββ’ ${prefix}hologram3d text
ββ’ ${prefix}greenneon text
ββ’ ${prefix}glossychrome text
ββ’ ${prefix}greenbush text
ββ’ ${prefix}metallogo text
ββ’ ${prefix}noeltext text
ββ’ ${prefix}glittergold text
ββ’ ${prefix}textcake text
ββ’ ${prefix}starsnight text
ββ’ ${prefix}wooden3d text
ββ’ ${prefix}textbyname text
ββ’ ${prefix}writegalacy text
ββ’ ${prefix}galaxybat text
ββ’ ${prefix}snow3d text
ββ’ ${prefix}birthdayday text
ββ’ ${prefix}goldplaybutton text
ββ’ ${prefix}silverplaybutton text
ββ’ ${prefix}freefire text
β£ββββββββββββββ
β£ββ² ππΌππΏππ πππΌππ β³
ββ’ ${prefix}bj
ββ’ ${prefix}ero
ββ’ ${prefix}ppcp
ββ’ ${prefix}cum
ββ’ ${prefix}feet
ββ’ ${prefix}yuri
ββ’ ${prefix}trap
ββ’ ${prefix}lewd
ββ’ ${prefix}feed
ββ’ ${prefix}eron
ββ’ ${prefix}solo
ββ’ ${prefix}gasm
ββ’ ${prefix}poke
ββ’ ${prefix}anal
ββ’ ${prefix}holo
ββ’ ${prefix}tits
ββ’ ${prefix}kuni
ββ’ ${prefix}kiss
ββ’ ${prefix}erok
ββ’ ${prefix}smug
ββ’ ${prefix}baka
ββ’ ${prefix}solog
ββ’ ${prefix}feetg
ββ’ ${prefix}lewdk
ββ’ ${prefix}waifu
ββ’ ${prefix}pussy
ββ’ ${prefix}femdom
ββ’ ${prefix}cuddle
ββ’ ${prefix}hentai
ββ’ ${prefix}eroyuri
ββ’ ${prefix}cum_jpg
ββ’ ${prefix}blowjob
ββ’ ${prefix}erofeet
ββ’ ${prefix}holoero
ββ’ ${prefix}classic
ββ’ ${prefix}erokemo
ββ’ ${prefix}fox_girl
ββ’ ${prefix}futanari
ββ’ ${prefix}lewdkemo
ββ’ ${prefix}wallpaper
ββ’ ${prefix}pussy_jpg
ββ’ ${prefix}kemonomimi
ββ’ ${prefix}nsfw_avatar
βββββββββββββ`
}

exports.rulesBot = () =>{
return`*ββγ RULES-BOT γββ*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`
}

exports.donasiBot = (cekName,ucapanWaktu) =>{
return`ββγ *MENU DONATE* γββ

Hi *${cekName}* ${ucapanWaktu} ππ»

*Payment Ovo*
Number: 0
A/N: -

*Payment Dana*
Number: 088289826392
A/N: H******Y

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

ββγ *THX FOR YOU* γββ`
}

exports.infoOwner = () =>{
return`ββγ *INFO OWNER* γββ

 *Data Profil*
 β’ *Nama:* Ryan Mods
 β’ *Umur:* 18 tahun
 β’ *Hoby:* Turu/Game
 β’ *Askot:* Bogor
 β’ *Konten:* Creator

_iam developer bot whatsapp._

 *Sosial Media*
 β’ *Whatsapp:* http://wa.me/6285717376113
 β’ *Instagram:* https://instagram.com/firdastiillearning
 β’ *Github:* https://github.com/NoenkBotzz
 `
}