/* ===================================================================
   DATA
=================================================================== */
const BIKES = [
  {id:1, title:"Trek Marlin 7", category:"Mountain", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80"},
  {id:2, title:"Cannondale CAAD13", category:"Road", price:1450, specs:"Carbon fork · 105 groupset · Size 54", img:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=700&q=80"},
  {id:3, title:"RadPower RadCity", category:"Electric", price:1399, specs:"500W motor · 45mi range · Step-thru", img:"https://images.unsplash.com/photo-1622185135505-2d795003994a?w=700&q=80"},
  {id:4, title:"Schwinn Cruiser Classic", category:"Vintage", price:320, specs:"Single speed · Steel frame · Restored", img:"https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=700&q=80"},
  {id:5, title:"Giant Talon 29", category:"Mountain", price:690, specs:"29in wheels · Hydraulic brakes", img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=700&q=80"},
  {id:6, title:"Specialized Allez", category:"Road", price:980, specs:"Aluminum frame · Shimano Claris", img:"https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=700&q=80"},
  {id:7, title:"Rad Mini Step-Thru", category:"Electric", price:1199, specs:"Foldable · 350W motor", img:"https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=700&q=80"},
  {id:8, title:"Raleigh Retro Roadster", category:"Vintage", price:410, specs:"3-speed hub · Leather seat", img:"https://images.unsplash.com/photo-1573599852326-eaf4f9c5e337?w=700&q=80"},
  {id:9, title:"Woom Kids Bike 14", category:"Kids", price:220, specs:"Ages 3-5 · Lightweight frame", img:"https://images.unsplash.com/photo-1605559911160-a3d95d213904?w=700&q=80"},
  {id:10, title:"Trek Domane SL5", category:"Road", price:1890, specs:"Endurance geometry · Carbon", img:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80"},
  {id:11, title:"Diamondback Atroz", category:"Mountain", price:560, specs:"Full suspension · 27.5in", img:"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=700&q=80"},
  {id:12, title:"Vintage Peugeot Road", category:"Vintage", price:275, specs:"Original 1978 frame · Restored gears", img:"https://images.unsplash.com/photo-1517649763962-0c623066013b?w=700&q=80"},

  // Motorcycle brands
  {id:13, title:"Yamaha R15 V4", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://i.pinimg.com/736x/3a/51/eb/3a51ebc1c374b913e7dc18b43c4f4a4e.jpg"},


  {id:14, title:"Yamaha MT-15", category:"Yamaha", price:3950, specs:"Naked street · 155cc · LED lighting", img:"https://iamabiker.com/wp-content/uploads/2022/07/Yamaha-MT-15-V2-HD-wallpaper-1-1536x864.jpg"},




{id:14, title:"Yamaha YZF-R1 — 998cc", category:"Yamaha", price:3950, specs:"Naked street · 998cc · LED lighting", img:"https://images4.alphacoders.com/128/thumb-1920-1280019.jpg"},



{id:14, title:"Yamaha R9 — 890cc", category:"Yamaha", price:3950, specs:"Naked street · 890cc · LED lighting", img:"https://roaddirt.tv/wp-content/uploads/2025/03/2025_Yamaha_R9_PIR-Statics_IntensityWhite_Redline-JosephAgustinPhoto-DSC07222.jpg"},


  
{id:14, title:"Yamaha R3 — 321cc", category:"Yamaha", price:3950, specs:"Naked street · 321cc · LED lighting", img:"https://images.openai.com/static-rsc-4/BlMHbII32Mc_GViw7Fzl-q3uudhEFqD6hWpxSBEONNJjXGa0y-DVKAK29e_n11ZCdXam__irb8nYrT5B_HPJSUxoSmvvsVMOms5owewpzoIGDcRrRPccJ1yQtI6W6wWA5WGS6EuroCaAyYaWvcUqsuC4LYmmwhcRarMuo7J92E49JghTED8atgHK6dvhyyEf?purpose=fullsize"},




{id:14, title:"Yamaha R7 — 689cc", category:"Yamaha", price:3950, specs:"Naked street · 689cc · LED lighting", img:"https://images.openai.com/static-rsc-4/_njsbTZSLSp3FoQectDtQmSUwp7zlDjppMWtqO-nbx96F-hmipdyA0xcWQ1maWzVlFhEaE6lfztNoSV2bAJHpuPe10VaZg7BOuXRc-ug_RZOGDFQE4PC3uxxhxCD-bXGVMo-wvfSDFztp2Zw_4ogkQLJL7sRYO1GZu4ciaU_E9zYexUuSX9TMFu9II5MZa4R?purpose=fullsize"},








{id:14, title:"Yamaha Tenere 700", category:"Yamaha", price:3950, specs:"Naked street · 700cc · LED lighting", img:"https://images.openai.com/static-rsc-4/PndemwXZozPeen2kx2NbcsSmMZGwk0zyTw2s0Y9pd7LVxesGr_OPDerg5LOJYa4Ry0GKwBpo0Z20R6zSczj6dNP_tVqq8cEKkOggF6x7Oiche-cbajW3KuuTORkVsrHhLSp8ju0rhxgF-LsadAhS2ypBk1rVHD3Nxjg-QzE0d-2eCVr4UNpMQWIwCZ-om-_e?purpose=fullsize"},




{id:14, title:"Yamaha FZ-S Fi V4 — 149cc", category:"Yamaha", price:12500, specs:"Naked street · 149cc · 4-cylinder", img:"https://images.openai.com/static-rsc-4/1aUmPXEF7iXM7SEhp5Ys_3KYciTvTAJG5N-Bqw0g7fIanoAmWENLIOqT5wwORKXRaS7bOj5JFE6yvvzyeVjyoxQmm4DSu9H797eRId3rEylTjY0f-wABl_c_Jh_7HUZg1DNl8bfG_3oVOOJ8O0VEPe2Uw4EIt6C64UaHXiCHh5amduZIeVxm0wA5FpYkowF6?purpose=fullsize"},






  {id:14, title:"Yamaha YZF-R6", category:"Yamaha", price:12500, specs:"Naked street · 599cc · 4-cylinder", img:"https://i.pinimg.com/736x/26/63/cc/2663ccecee16ace113ab7358749d6557.jpg"},

   {id:14, title:"Yamaha RX100", category:"Yamaha", price:1250, specs:"RX KING .100cc", img:"https://images.openai.com/static-rsc-4/mUid5S5xK2KEo904-IUO5EeZjujBHwdMGSibep3hj2SBzb90yABvsGJrYBT23WWZ4k5nBbFvHug6_t1TkRsiIOV8pmrJnXQvBoUwitjEv20JsjbL466qYQ5Z1_HS50YyFQLatSZwdgWPOcUXYYEpJ8ZXx_hkDvLfuIYeZkKdByTP4OTpM0ArWbKZbhoqrlZF?purpose=fullsize"},
  

  {id:15, title:"KTM Duke 390", category:"KTM", price:5800, specs:"373cc single · TFT display · ABS", img:"https://images.unsplash.com/photo-1608975213589-14e7f23aeab7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVrZSUyMDM5MHxlbnwwfHwwfHx8MA%3D%3D"},
  
  {id:16, title:"KTM 1390 Super Duke R", category:"KTM", price:12000, specs:"190 HP.V-Twin", img:"https://i.pinimg.com/1200x/af/f1/62/aff162e5c6474dea2f8c1fe3ba04887c.jpg"},

{id:16, title:"KTM RC 390", category:"KTM", price:6100, specs:"Track-focused fairing · Slipper clutch", img:"https://i.pinimg.com/736x/91/bf/19/91bf193473f61501b1557ed2d0794c75.jpg"},

  {id:17, title:"Honda CBR1000RR-R Fireblade", category:"Honda", price:28999, specs:"999cc MotoGP-inspired Aerodynamics", img:"https://4kwallpapers.com/images/walls/thumbs_2t/6942.jpg"},

  {id:18, title:"Honda CBR600R", category:"Honda", price:9200, specs:"600cc inline-4 · Sport fairing", img:"https://w0.peakpx.com/wallpaper/83/457/HD-wallpaper-honda-motorcycle-honda-cbr600rr-vehicles.jpg"},

{id:18, title:"Honda Shine", category:"Honda", price:900, specs:"125 cc inline-4", img:"https://images.openai.com/static-rsc-4/TB6TUa6kqAR9sg0Enh_DUrSOHUPZdqQRD_JjeLPax8WjkT4dMrPoTgMBjY3HekhMMz3MvEoRUFck1eXLFMpkJLdtq06m7PiM3jOSmmgEAZ8yWxiZPCU4r8WBmQcZn-NwQfjgIuIG80aIzSzlzKczGfjPoPbZ8hZuwD4Ar-OEiSMhH-fi6j6IupD0RlSLxJh-?purpose=fullsize"},

{id:18, title:"Honda Gold Wing", category:"Honda", price:25000, specs:"1833cc 6-cylinder engine", img:"https://www.motorcyclecruiser.com/resizer/nrk2Ft6YVRf-H3oYZNs2zRAup5A=/1000x750/filters:focal(45x45:55x55)/cloudfront-us-east-1.images.arcpublishing.com/octane/HMWD4LG2476JUDJP3HHHSTHQQQ.jpg"},


  {id:19, title:" Pulsar NS200", category:"Bajaj", price:2600, specs:"199cc · Perimeter frame · Sporty", img:"https://i.pinimg.com/736x/9f/36/cb/9f36cb4aa352a082dfa16d8b82ed499e.jpg"},


  {id:20, title:" Dominar 400", category:"Bajaj", price:3800, specs:"373cc tourer · Twin-channel ABS", img:"https://images.unsplash.com/photo-1644879796743-32f929189b81?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

  {id:19, title:" Pulsar 220", category:"Bajaj", price:2600, specs:"200cc · Perimeter frame ", img:"https://w0.peakpx.com/wallpaper/87/537/HD-wallpaper-pulsar220-220f-pulsar.jpg"},

{id:19, title:" Pulsar 150", category:"Bajaj", price:2600, specs:"150cc", img:"https://w0.peakpx.com/wallpaper/62/192/HD-wallpaper-pulsar-150-bajaj-pulsar-150-motorcycle.jpg"},


  {id:21, title:"Royal Enfield Classic 350", category:"Royal Enfield", price:4300, specs:"349cc thump · Retro styling", img:"https://i.pinimg.com/750x/8e/f7/ec/8ef7ec13cb860659c36e54a2208da5e3.jpg"},

   {id:21, title:"Royal Enfield Super Meteor 650", category:"Royal Enfield", price:4300, specs:"650cc thump · Retro styling", img:"https://wallpaperaccess.com/full/23189321.jpg"},

 {id:21, title:"Royal Enfield Bear 650", category:"Royal Enfield", price:4400, specs:"650cc thump · Retro styling", img:"https://external-preview.redd.it/wonder-why-royal-enfield-is-calling-its-latest-the-bear-650-v0-c-s9JsPCOlY7A7Igq2tvltpkGxje83z0SkgExf-xYIM.jpg?auto=webp&s=d74e535c6756e1746c5f3535c26f96a3d0bfff94"},


  {id:21, title:"Royal Enfield Himalayan 450", category:"Royal Enfield", price:4500, specs:"450cc thump · Retro  styling", img:"https://i.pinimg.com/1200x/20/c4/a9/20c4a9e2a5f30365873f4e7840188ef4.jpg"},

  
  {id:22, title:"Royal Enfield Hunter 350", category:"Royal Enfield", price:5400, specs:"Single-cylinder, air–oil cooled J-series engine", img:"https://imgcdn.zigwheels.my/large/gallery/exterior/89/1881/royal-enfield-hunter-350-right-side-viewfull-image-390792.jpg"},


  {id:23, title:"Triumph Speed 400", category:"Triumph", price:5400, specs:"398cc single · Premium retro build", img:"https://d2lkn59rua3ry2.cloudfront.net/wp-content/uploads/2026/03/Triumph-Motorcycles-2.jpg"},


  {id:24, title:"Triumph Scrambler 400 X", category:"Triumph", price:11500, specs:"400cc triple · Naked street performance", img:"https://www.apex66.co.uk/wp-content/uploads/2025/07/Triumph-Scrambler-400X-06.jpg"},

  {id:24, title:"Triumph Speed Triple 1200 RS", category:"Triumph", price:11500, specs:"1200cc triple · Naked street performance", img:"https://w0.peakpx.com/wallpaper/914/45/HD-wallpaper-triumph-speed-triple-motorcycle-triumph.jpg"},

{id:24, title:"Triumph Bonneville T120", category:"Triumph", price:11500, specs:"900cc triple · Naked street performance", img:"https://i.pinimg.com/736x/b6/0f/83/b60f8357950b83960fe96f0d5e35c1bf.jpg"},

{id:24, title:"Triumph Bonneville T100", category:"Triumph", price:11500, specs:"900cc triple · Naked street performance", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhlsEeqt_BAJdT__Foej0YUU-_VubXu8RUssuzoI-5QQvKUI7r0j2ogFX&s=10"},




{id:24, title:"Triumph Speed Twin 900", category:"Triumph", price:11500, specs:"900cc triple · Naked street performance", img:"https://images.openai.com/static-rsc-4/v3BHOCqjyiuIWG1orAfNEVPu0QbLiwTUImGeJomKSVGpae8h9nxt8tUdO7yq7BScas9hZIpkDuTuA2BJ4YGag-zt7dlj5J-GhCaACIy3BsLs64A7tjXjC2l68jdg8bAcNupfWgN4-Y6Q0PU1naCXUH1M9Fh-nVjbqiIubN4qOFbZo3cg3PaIRqDgYGUeOKET?purpose=fullsize"},


 {id:24, title:"Triumph Street Triple 765", category:"Triumph", price:11500, specs:"765cc triple · Naked street performance", img:"https://mir-s3-cdn-cf.behance.net/projects/404/fd77bc227089759.Y3JvcCw1MTEzLDQwMDAsNDQzLDA.jpg"},



  {id:25, title:"Benelli Leoncino 500", category:"Benelli", price:6700, specs:"500cc parallel-twin · Scrambler styling", img:"https://c.ndtvimg.com/2019-08/gch0vbr_benelli-leoncino-500-_625x300_05_August_19.jpg"},




{id:25, title:"Benelli 402S — 400cc", category:"Benelli", price:6700, specs:"400cc parallel-twin · Scrambler styling", img:"https://w0.peakpx.com/wallpaper/155/834/HD-wallpaper-benelli-tnt135-2018-bikes-darkness-superbikes-benelli.jpg"},



{id:25, title:"Benelli TRK 502X — 500cc", category:"Benelli", price:6700, specs:"500cc parallel-twin · Scrambler styling", img:"https://images.openai.com/static-rsc-4/9nmmu8hBP_6gxwcMHZfG8O22uOq5m1AOCnL8q9nn7VS7SM0gSR0fmRZTbGEbJMrPzTnZuAhN-f0Cy71zswQdC0PmeqpbVYBx8a04TpZag-FpTqFH5IPcIjz5Jw2ok6SYm5dP7R5-Y17LzXFFVXSA5Og-FWAC02RFeBYlmI_WDj01fVMXer9YYvJjrFqet5TF?purpose=fullsize"},



{id:25, title:"Benelli tnt 250cc", category:"Benelli", price:6700, specs:"250cc parallel-twin · Scrambler styling", img:"https://i0.wp.com/cdn.warungasep.net/2019/05/benelli-tnt-250-2019.jpg"},




{id:25, title:"Benelli TNT 600i — 600cc", category:"Benelli", price:6700, specs:"600cc parallel-twin · Scrambler styling", img:"https://i.pinimg.com/originals/c5/48/36/c54836dd0b4bb6a3e6a5110860e8ead9.jpg"},



{id:25, title:"Benelli TNT 300 — 300cc", category:"Benelli", price:6700, specs:"300cc parallel-twin · Scrambler styling", img:"https://www.bikesrepublic.com/wp-content/uploads/2016/02/Benelli-TNT-300-1.jpg"},



{id:25, title:"Benelli 302R — 300cc", category:"Benelli", price:6700, specs:"300cc parallel-twin · Scrambler styling", img:"https://images.openai.com/static-rsc-4/eGvvS9NdK5aO3L7JcO9TNDBDTsbUcMPSE2Kj8rpVp3hZAPwXGikvb3CovwHquZwR__sX8CApE7ySXXSEPfI1WfFpNWaLlGZhFmKUTCLYVyFEV1w8Px6iepMnZEbwQLef4TekJ6QH63RQDHlQ-FYGwbxO7KsF8Q999qrJH2DncXYWjxPkNjh3pKMH0cC5PpkO?purpose=fullsize"},




{id:25, title:"Benelli TNT 15 — 150cc", category:"Benelli", price:6700, specs:"150cc parallel-twin · Scrambler styling", img:"https://images.openai.com/static-rsc-4/TdzIWkgoLqRgKyJZindrXHhUfOPuRztcacvkzgfup6ebLDi16EvX7gPrdpy7SI7jdBq8-fFR7i-NhDx6FcY-sDwMmfMtvspwDvNgaV3Sf2f1U8eJSCRrqdImMImLfPX8mGyYyCcSF7Bou2_JE-DKAw1CnR3aaOFpyMBLDiw_to8wjOyzQw9M3P1BwZrkB84b?purpose=fullsize"},



  {id:26, title:"Benelli TRK 502X", category:"Benelli", price:7300, specs:"Adventure tourer · Spoked wheels", img:"https://images.openai.com/static-rsc-4/cMlxb2EYX0wBHyHK6MvJUICfVrk9-3NKyFwH-5OyyP7utRtl8WijwX9Gx5d00TTbbB1b1_kLMNFJllaIn3NQRTxk8r4krVjYQ0ZNiW2yNAokJpA8RdKfLE8vG0nklxo9zJg4ibeKI5gBn7up5uXmQVmw6T3M-IVIBnhTYKGmtO_l1mY8RiBk0wqnRWTYeJ7l?purpose=fullsize"},




  {id:27, title:"Ducati Monster 821", category:"Ducati", price:13800, specs:"L-twin engine · Italian naked icon", img:"https://images.openai.com/static-rsc-4/3cQah3Q3B23qhkgeYmGA7CLhwcmR_O15PJRACMx1NxxsENDepp9vgUrErxxYUcvjNsul88x1akHOmOvLKoNVNXDYxb_pd4F7LR1TCe9UnQFKyytLx7ToxU_K8d79E9UJZgsJBJ6DjcuHwuckvSb8mW-BBIHRQbkWEOXDl_gp19weMWbYafp-OdCeHuBgCjXi?purpose=fullsize"},




  {id:28, title:"Ducati Panigale V2", category:"Ducati", price:18900, specs:"955cc superbike · Full race fairing", img:"https://wallpapercave.com/wp/wp8254287.jpg"},


  
{id:28, title:"Ducati Hypermotard 950", category:"Ducati", price:18900, specs:"950cc superbike · Full race fairing", img:"https://imgcdn.zigwheels.my/large/gallery/exterior/58/1854/ducati-hypermotard-950-slant-rear-view-full-image-854813.jpg"},


{id:28, title:"Ducati Monster — 937cc", category:"Ducati", price:18900, specs:"937cc superbike · Full race fairing", img:"https://images3.alphacoders.com/849/thumb-1920-849162.jpg"},



{id:28, title:"Ducati Streetfighter V2 — 955cc", category:"Ducati", price:18900, specs:"955cc superbike · Full race fairing", img:"https://w0.peakpx.com/wallpaper/294/1015/HD-wallpaper-ducati-streetfighter-v4-sp-launched-in-india-ducati-streetfighter-v4s.jpg"},





{id:28, title:"Ducati Streetfighter V4 — 1103cc", category:"Ducati", price:18900, specs:"1103cc superbike · Full race fairing", img:"https://wallpapercave.com/wp/wp15704246.jpg"},




{id:28, title:"Ducati Multistrada V2 — 937cc", category:"Ducati", price:18900, specs:"937cc superbike · Full race fairing", img:"https://imgcdn.zigwheels.my/large/gallery/exterior/58/1869/ducati-multistrada-v2-slant-rear-view-full-image-397426.jpg"},



{id:28, title:"Ducati Multistrada V4 — 1158cc", category:"Ducati", price:18900, specs:"1158cc superbike · Full race fairing", img:"https://images.openai.com/static-rsc-4/OpFbb3b_YkTvU5FKqIkoD7hfq8kpvL8h9h5dpaIy0Q28lEOdh44qByJ31NbI0DjI8zpII-N86drGnoK-iVcyKgpqNcm5y_G6Ie88b_0zqL9sYelKOxGcLa8sWqYyEH-9_llPIztIr8uZXWADjVtXde4uCZuZ-Ri6Rsimezkp3fQih-bEUN846_9MEBAdmjAV?purpose=fullsize"},




{id:28, title:"Ducati DesertX — 937cc", category:"Ducati", price:18900, specs:"937cc superbike · Full race fairing", img:"https://images.autox.com/uploads/2021/12/Ducati-DesertX-Front-three-quarter-static-2.jpg"},



{id:28, title:"Ducati Diavel V4 — 1158cc", category:"Ducati", price:18900, specs:"1158cc superbike · Full race fairing", img:"https://c4.wallpaperflare.com/wallpaper/409/195/639/ducati-ducati-diavel-ducati-wallpaer-motorsport-wallpaper-preview.jpg"},



{id:28, title:"Ducati Panigale V4 — 1103cc", category:"Ducati", price:18900, specs:"1103cc superbike · Full race fairing", img:"https://i.pinimg.com/1200x/de/4d/ec/de4dec487694b416450516aa5609bc01.jpg"},


{id:28, title:"Ducati XDiavel V4 — 1158cc", category:"Ducati", price:18900, specs:"1158cc superbike · Full race fairing", img:"https://c4.wallpaperflare.com/wallpaper/644/949/246/ducati-diavel-2017-wallpaper-preview.jpg"},

{id:28, title:"Ducati Hypermotard V2", category:"Ducati", price:18900, specs:"890cc superbike · Full race fairing", img:"https://images.openai.com/static-rsc-4/WDPwokW8HZae5Rd0uVaCyeMw1lW-td5SlN9gQRv11JdGXjCIKAVvBVcA4vo_51EXH5652WsAPVndmiH3HkXoPaGhtqzrixlBWyMYtQP8BSG4d6kbE7c_DMZS4Boj34LxilrBqNbkQSKSjsrT38r3OA-LakQJXCi1Oo41dxccXZLSTPbzZle4d0tsEqG5-gEC?purpose=fullsize"},


{id:28, title:"Ducati Hypermotard 950 SP", category:"Ducati", price:18900, specs:"950cc superbike · Full race fairing", img:"https://images.openai.com/static-rsc-4/JQxOsl6utvvvSG-VF8GG4jNAT-8YLG5dkHRU05k4fuRtNhlfjHRnLEcyv9xKtrOCTbQXBWJJrqjlaamwkzOfobdO_33GpVqT964lZfSTxGm_rRvOr6_lSCyB8-E4QwpumjRs6fOyZGIGrD-jsQWu2M_aJxqY_SpgyyWPu2gxefbOdnitGrcqaDI2EcIHNuNE?purpose=fullsize"},


{id:28, title:"Ducati Scrambler Icon — 803cc", category:"Ducati", price:18900, specs:"803cc superbike · Full race fairing", img:"https://cdn-s3.autocarindia.com/legacy/cdni/ExtraImages/20151203115915_3.jpg?w=728&q=75"},



{id:28, title:"Ducati Hypermotard 950 RVE", category:"Ducati", price:18900, specs:"950cc superbike · Full race fairing", img:"https://images.openai.com/static-rsc-4/CbHjyK8JywJhO075DqUrQ25aNMqmbIqqTH0XN9bvgZN_nsAayeuCzuh2--GUmah7nLuvODqj5x1_QOprCKAsnLY-Ua1MY9wxl7yZG3D77syuxnPS8393BaK2pOxvAf0m_oXFuMLd8caVSCPrGtcYOQSVxhTL-ES9n0oYyaTUDqoWM8gQw7mpe6B5nubYVeE4?purpose=fullsize"},



{id:28, title:"Ducati Scrambler Full Throttle — 803cc", category:"Ducati", price:18900, specs:"803cc superbike · Full race fairing", img:"https://images.openai.com/static-rsc-4/YGscPFzH2s2hZYqZqa1FttPLKoJ6Lz35kb2aBXs7ov_9sMhQKs3K-qY1v3y4f7jJ4UT8sTcdxlRerZ_p8km8SIRZQsJTFEWMrQiB8wvqrCEQI2m-kVdSgMM7mjolSA1fzGK-C-SNj0UZOA1TqXbonZ7BoaHLRpxOI0TvjAvzqu9At4KDuW4pdug6Q0U6R90T?purpose=fullsize"},




  {id:29, title:"CFMOTO 150NK — 150cc", category:"CFMOTO", price:9600, specs:"150cc ", img:"https://images.openai.com/static-rsc-4/vYUPOaWBi4Yzlh6MT_heBlfEhX3f5sOnIV9QMRKS3L1ZYG_SeinbkN3iKkShBtxWk2J0EOCsKvoAYh_pyEm4gKms1a8s-GwFU3XGgGJjCIUEFSumI5EMJTKYSP_YQHspMxdTCYPRnJ7tR5Y5pmLlUzO1TxdPNvoDHpXx8Bay4ALC66yNLxLFx9o_s1Ce7Wof?purpose=fullsize"},




{id:29, title:"CFMOTO 650NK — 649cc", category:"CFMOTO", price:9600, specs:"649cc ", img:"https://www.cycleworld.com/resizer/9US0EPYbEwsDI3L4MvyzrE3Jbw8=/1440x0/filters:focal(930x780:940x790)/cloudfront-us-east-1.images.arcpublishing.com/octane/5AJJREML7ZAGRPWGDGDKGKPUJM.jpg"},




{id:29, title:"CFMOTO 500SR VOOM — 500cc", category:"CFMOTO", price:9600, specs:"500cc ", img:"https://imgcdn.zigwheels.my/large/gallery/exterior/99/2543/cfmoto-500-sr-voom-slant-front-view-full-image-377196.jpg"},



{id:29, title:"CFMOTO 675SR-R — 675cc", category:"CFMOTO", price:9600, specs:"675cc ", img:"https://images.squarespace-cdn.com/content/v1/598ac434893fc03ed7bdaff2/d80278a4-800a-4401-b532-67015e6de05f/IMG_1238.jpg"},


{id:29, title:"CFMOTO 450MT — 449cc", category:"CFMOTO", price:9600, specs:"449cc ", img:"https://www.adventureshield.nl/333-medium_default/cfmoto-450mt.jpg"},




{id:29, title:"CFMOTO 800NK — 799cc", category:"CFMOTO", price:9600, specs:"799cc ", img:"https://media.vxt.production.ldv-svcs.live/assets/cfmoto/images/2024_models/color-swap/24-mcy-800nk-hero-black-swap.jpg"},




  {id:30, title:"CFMOTO 250NK  250cc", category:"CFMOTO", price:8200, specs:"250cc ", img:"https://images.openai.com/static-rsc-4/91qwbUQV-UQ5RElg9Ie7FshpDvv4IJ4CopSKsl74HSDWcB-RxZZhxAsUWI7nFzqBXyWZTZ4eWNxygeoOtKdn7PwPSe6p2CljGf92y8_Jiw1-9dlKVHlgx0UvsEPy4nggNKYhw9s5nfKS2DdOX8DLzxbXdivEND7h2T89gfepI82xZbk4HsCPa7QWBnjn8ZLJ?purpose=fullsize"},



{id:29, title:"CFMOTO 650MT — 649cc", category:"CFMOTO", price:9600, specs:"649cc ", img:"https://images.openai.com/static-rsc-4/dOcGF769FjGPj9U-FpDu8o9c-w9X6mNNoLunNkhdzb9gttOXaRtE-2dTH5ZUJ386pO309KQ7DBTBonP8V774pYkAmO6Eb2M_TrXWYrJq3Y4NpmqsmhHzNCU7Sw9iSZRs60gJRo-tetejQ1rQ4sPPXBp0w-Ftzeb9LnEDPlXsigS2AwcAazqe1gBsJB3A0rYl?purpose=fullsize"},


{id:29, title:"CFMOTO 800MT — 799cc", category:"CFMOTO", price:9600, specs:"799cc ", img:"https://imgcdn.zigwheels.my/medium/gallery/exterior/99/2434/cfmoto-800-mt-58838.jpg"},





];





const STORAGE_KEYS = { users:"ih_users", session:"ih_session", listings:"ih_listings", orders:"ih_orders", cart:"ih_cart" };

/* ===================================================================
   STORAGE HELPERS (simulated backend using localStorage)
=================================================================== */
function loadJSON(key, fallback){ try{ const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; }catch(e){ return fallback; } }
function saveJSON(key, val){ localStorage.setItem(key, JSON.stringify(val)); }

let users = loadJSON(STORAGE_KEYS.users, []);
let listings = loadJSON(STORAGE_KEYS.listings, []);   // user-submitted bikes
let orders = loadJSON(STORAGE_KEYS.orders, []);
let cart = loadJSON(STORAGE_KEYS.cart, []);           // [{id, qty}]
let currentUser = loadJSON(STORAGE_KEYS.session, null);

function persistAll(){
  saveJSON(STORAGE_KEYS.users, users);
  saveJSON(STORAGE_KEYS.listings, listings);
  saveJSON(STORAGE_KEYS.orders, orders);
  saveJSON(STORAGE_KEYS.cart, cart);
}

function allBikes(){ return [...BIKES, ...listings]; }
function findBike(id){ return allBikes().find(b => b.id === id); }

/* ===================================================================
   VIEW ROUTING
=================================================================== */
function goTo(viewName){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + viewName).classList.add('active');
  document.querySelectorAll('nav.links a').forEach(a => a.classList.toggle('active', a.dataset.view === viewName));
  window.scrollTo({top:0, behavior:'smooth'});

  if(viewName === 'shop') renderShop();
  if(viewName === 'dashboard') renderDashboard();
  if(viewName === 'checkout') renderCheckout();
}

/* ===================================================================
   AUTH
=================================================================== */
function renderAuthArea(){
  const el = document.getElementById('authArea');
  if(currentUser){
    el.innerHTML = `<button class="icon-btn" onclick="goTo('dashboard')">👤 ${escapeHTML(currentUser.name.split(' ')[0])}</button>
                     <button class="btn-ghost" onclick="logout()" style="margin-left:10px;">Log Out</button>`;
  } else {
    el.innerHTML = `<button class="btn-ghost" onclick="goTo('login')">Log In</button>
                     <button class="btn-primary" onclick="goTo('signup')" style="margin-left:10px;">Sign Up</button>`;
  }
}

function showMsg(elId, text, type){
  const el = document.getElementById(elId);
  el.textContent = text;
  el.className = 'form-msg ' + type;
  el.style.display = 'block';
}

document.getElementById('signupForm').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim().toLowerCase();
  const password = document.getElementById('signupPassword').value;

  if(users.some(u => u.email === email)){
    showMsg('signupMsg', 'An account with this email already exists.', 'error');
    return;
  }
  const newUser = {id: 'u' + Date.now(), name, email, password};
  users.push(newUser);
  persistAll();
  showMsg('signupMsg', 'Account created! Logging you in...', 'success');
  setTimeout(()=>{
    currentUser = {id:newUser.id, name:newUser.name, email:newUser.email};
    saveJSON(STORAGE_KEYS.session, currentUser);
    renderAuthArea();
    goTo('dashboard');
  }, 600);
});

document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim().toLowerCase();
  const password = document.getElementById('loginPassword').value;
  const user = users.find(u => u.email === email && u.password === password);
  if(!user){
    showMsg('loginMsg', 'Incorrect email or password.', 'error');
    return;
  }
  currentUser = {id:user.id, name:user.name, email:user.email};
  saveJSON(STORAGE_KEYS.session, currentUser);
  renderAuthArea();
  showMsg('loginMsg', 'Welcome back, ' + user.name + '!', 'success');
  setTimeout(()=> goTo('dashboard'), 400);
});

function logout(){
  currentUser = null;
  localStorage.removeItem(STORAGE_KEYS.session);
  renderAuthArea();
  goTo('home');
  showToast('You have been logged out.');
}

function requireLogin(viewAfter){
  if(!currentUser){
    showToast('Please log in to continue.');
    goTo('login');
    return false;
  }
  return true;
}

/* ===================================================================
   RENDER PRODUCTS
=================================================================== */
function bikeCardHTML(b){
  return `
  <div class="card">
    <div class="card-photo">
      <span class="card-badge">${escapeHTML(b.category)}</span>
      <img src="${escapeAttr(b.img)}" alt="${escapeAttr(b.title)}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80'">
    </div>
    <div class="card-body">
      <div class="card-cat">${escapeHTML(b.category)}</div>
      <div class="card-title">${escapeHTML(b.title)}</div>
      <div class="card-spec">${escapeHTML(b.specs||'')}</div>
      <div class="card-foot">
        <div class="card-price"><span class="cur">$</span>${b.price}</div>
        <button class="add-btn" onclick="addToCart(${b.id})">Add to Cart</button>
      </div>
    </div>
  </div>`;
}

function renderFeatured(){
  const featured = allBikes().slice(0,6);
  document.getElementById('featuredGrid').innerHTML = featured.map(bikeCardHTML).join('');
}

let activeFilter = 'All';
function renderShop(){
  const cats = ['All', ...new Set(allBikes().map(b=>b.category))];
  document.getElementById('filterBar').innerHTML = cats.map(c =>
    `<button class="chip ${c===activeFilter?'active':''}" onclick="setFilter('${c}')">${c}</button>`
  ).join('');
  const list = activeFilter==='All' ? allBikes() : allBikes().filter(b=>b.category===activeFilter);
  document.getElementById('shopGrid').innerHTML = list.length ? list.map(bikeCardHTML).join('') : `<div class="empty-state"><div class="big">∅</div>No bikes in this category yet.</div>`;
}
function setFilter(cat){ activeFilter = cat; renderShop(); }

/* ===================================================================
   SELL / LISTING FORM
=================================================================== */
function previewListingImage(){
  const url = document.getElementById('sellImage').value.trim();
  const box = document.getElementById('listingPreview');
  if(url){
    box.innerHTML = `<img src="${escapeAttr(url)}" onerror="this.parentElement.innerHTML='⚠ Could not load image — check the link';">`;
  } else {
    box.innerHTML = 'Photo preview will appear here';
  }
}

document.getElementById('sellForm').addEventListener('submit', function(e){
  e.preventDefault();
  if(!requireLogin()) return;
  const title = document.getElementById('sellTitle').value.trim();
  const category = document.getElementById('sellCategory').value;
  const price = parseFloat(document.getElementById('sellPrice').value);
  const specs = document.getElementById('sellSpecs').value.trim();
  const img = document.getElementById('sellImage').value.trim();

  const listing = { id: Date.now(), title, category, price, specs, img, sellerId: currentUser.id, sellerName: currentUser.name };
  listings.push(listing);
  persistAll();
  showMsg('sellMsg', 'Listing published! It now appears in the shop.', 'success');
  this.reset();
  document.getElementById('listingPreview').innerHTML = 'Photo preview will appear here';
  setTimeout(()=> goTo('shop'), 700);
});

/* ===================================================================
   CART
=================================================================== */
function addToCart(id){
  const existing = cart.find(c => c.id === id);
  if(existing) existing.qty += 1;
  else cart.push({id, qty:1});
  persistAll();
  updateCartCount();
  showToast('Added to cart 🚲');
}
function removeFromCart(id){
  cart = cart.filter(c => c.id !== id);
  persistAll();
  renderDrawer();
  updateCartCount();
}
function changeQty(id, delta){
  const item = cart.find(c => c.id === id);
  if(!item) return;
  item.qty += delta;
  if(item.qty <= 0) return removeFromCart(id);
  persistAll();
  renderDrawer();
  updateCartCount();
}
function cartTotal(){
  return cart.reduce((sum, c) => { const b = findBike(c.id); return sum + (b? b.price*c.qty : 0); }, 0);
}
function updateCartCount(){
  document.getElementById('cartCount').textContent = cart.reduce((n,c)=>n+c.qty,0);
}
function openCart(){
  renderDrawer();
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('drawerOverlay').classList.add('open');
}
function closeCart(){
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('drawerOverlay').classList.remove('open');
}
function renderDrawer(){
  const body = document.getElementById('drawerBody');
  if(cart.length === 0){
    body.innerHTML = `<div class="empty-state"><div class="big">🛒</div>Your cart is empty.</div>`;
  } else {
    body.innerHTML = cart.map(c => {
      const b = findBike(c.id);
      if(!b) return '';
      return `
      <div class="cart-item">
        <img src="${escapeAttr(b.img)}" alt="${escapeAttr(b.title)}">
        <div class="cart-item-info">
          <div class="name">${escapeHTML(b.title)}</div>
          <div class="price">$${b.price}</div>
          <div class="qty-control">
            <button onclick="changeQty(${b.id},-1)">−</button>
            <span>${c.qty}</span>
            <button onclick="changeQty(${b.id},1)">+</button>
          </div>
          <a class="remove-link" onclick="removeFromCart(${b.id})">Remove</a>
        </div>
      </div>`;
    }).join('');
  }
  document.getElementById('drawerTotal').textContent = '$' + cartTotal();
}
function goToCheckout(){
  if(cart.length === 0){ showToast('Your cart is empty.'); return; }
  closeCart();
  if(!requireLogin()) return;
  goTo('checkout');
}

/* ===================================================================
   CHECKOUT / PAYMENT
=================================================================== */
let payMethod = 'card';
function setPayMethod(m){
  payMethod = m;
  document.querySelectorAll('.pay-method').forEach(b => b.classList.toggle('active', b.dataset.method===m));
  document.getElementById('payCardFields').style.display = m==='card' ? 'block':'none';
  document.getElementById('payUpiFields').style.display = m==='upi' ? 'block':'none';
  document.getElementById('payCodNote').style.display = m==='cod' ? 'block':'none';
}
function formatCardNumber(input){
  let v = input.value.replace(/\D/g,'').slice(0,16);
  let formatted = v.replace(/(.{4})/g,'$1 ').trim();
  input.value = formatted;
  document.getElementById('cardArtNum').textContent = formatted ? formatted.padEnd(19,'•') : '•••• •••• •••• ••••';
}
document.getElementById('cardName')?.addEventListener('input', function(){
  document.getElementById('cardArtName').textContent = this.value.toUpperCase() || 'CARD HOLDER';
});
document.getElementById('cardExpiry')?.addEventListener('input', function(){
  let v = this.value.replace(/\D/g,'').slice(0,4);
  if(v.length>=3) v = v.slice(0,2)+'/'+v.slice(2);
  this.value = v;
  document.getElementById('cardArtExp').textContent = v || 'MM/YY';
});

function renderCheckout(){
  const itemsEl = document.getElementById('checkoutItems');
  itemsEl.innerHTML = cart.map(c => {
    const b = findBike(c.id);
    if(!b) return '';
    return `<div class="summary-line"><span>${escapeHTML(b.title)} × ${c.qty}</span><span>$${b.price*c.qty}</span></div>`;
  }).join('');
  const subtotal = cartTotal();
  const shipping = cart.length ? 25 : 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;
  document.getElementById('sumSubtotal').textContent = '$'+subtotal;
  document.getElementById('sumShipping').textContent = '$'+shipping;
  document.getElementById('sumTax').textContent = '$'+tax;
  document.getElementById('sumTotal').textContent = '$'+total;
  if(currentUser){
    document.getElementById('shipName').value = currentUser.name;
  }
}

function placeOrder(){
  if(cart.length === 0){ showToast('Your cart is empty.'); return; }
  const name = document.getElementById('shipName').value.trim();
  const phone = document.getElementById('shipPhone').value.trim();
  const address = document.getElementById('shipAddress').value.trim();
  const city = document.getElementById('shipCity').value.trim();
  const zip = document.getElementById('shipZip').value.trim();

  if(!name || !phone || !address || !city || !zip){
    showMsg('checkoutMsg', 'Please fill in all shipping fields.', 'error');
    return;
  }
  if(payMethod === 'card'){
    const num = document.getElementById('cardNumber').value.replace(/\s/g,'');
    const exp = document.getElementById('cardExpiry').value;
    const cvv = document.getElementById('cardCvv').value;
    if(num.length < 16 || exp.length < 5 || cvv.length < 3){
      showMsg('checkoutMsg', 'Please enter valid card details.', 'error');
      return;
    }
  }
  if(payMethod === 'upi'){
    const upi = document.getElementById('upiId').value.trim();
    if(!upi.includes('@')){
      showMsg('checkoutMsg', 'Please enter a valid UPI ID.', 'error');
      return;
    }
  }

  // simulate payment processing
  showMsg('checkoutMsg', 'Processing payment...', 'success');
  setTimeout(()=>{
    const subtotal = cartTotal();
    const order = {
      id: 'ORD' + Date.now(),
      userId: currentUser.id,
      items: cart.map(c => { const b = findBike(c.id); return {id:c.id, title:b.title, img:b.img, price:b.price, qty:c.qty}; }),
      total: subtotal + 25 + Math.round(subtotal*0.08),
      method: payMethod,
      shipping: {name, phone, address, city, zip},
      status: 'Confirmed',
      date: new Date().toISOString()
    };
    orders.push(order);
    cart = [];
    persistAll();
    updateCartCount();
    document.getElementById('successText').textContent = `Order ${order.id} confirmed. Total paid: $${order.total} via ${payMethod.toUpperCase()}.`;
    goTo('success');
  }, 900);
}

/* ===================================================================
   DASHBOARD
=================================================================== */
let dashPanel = 'overview';
function setDashPanel(p){
  dashPanel = p;
  document.querySelectorAll('.dash-nav button').forEach(b => b.classList.toggle('active', b.dataset.panel===p));
  renderDashBody();
}
function renderDashboard(){
  if(!requireLogin()) return;
  document.getElementById('dashAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  document.getElementById('dashName').textContent = currentUser.name;
  document.getElementById('dashEmail').textContent = currentUser.email;
  renderDashBody();
}
function myOrders(){ return orders.filter(o => o.userId === currentUser.id).sort((a,b)=> new Date(b.date)-new Date(a.date)); }
function myListings(){ return listings.filter(l => l.sellerId === currentUser.id); }

function renderDashBody(){
  const panel = document.getElementById('dashPanel');
  if(dashPanel === 'overview'){
    const mo = myOrders(); const ml = myListings();
    panel.innerHTML = `
      <h3>Overview</h3>
      <div class="kpi-row">
        <div class="kpi"><div class="num">${mo.length}</div><div class="lbl">Orders Placed</div></div>
        <div class="kpi"><div class="num">${ml.length}</div><div class="lbl">Bikes Listed</div></div>
        <div class="kpi"><div class="num">$${mo.reduce((s,o)=>s+o.total,0)}</div><div class="lbl">Total Spent</div></div>
      </div>
      <h3 style="font-size:16px;">Recent Activity</h3>
      ${mo.slice(0,3).map(orderRowHTML).join('') || '<div class="empty-state">No orders yet — go grab a bike!</div>'}
    `;
  } else if(dashPanel === 'orders'){
    const mo = myOrders();
    panel.innerHTML = `<h3>My Orders</h3>` + (mo.length ? mo.map(orderRowHTML).join('') : `<div class="empty-state"><div class="big">📦</div>No orders yet.</div>`);
  } else if(dashPanel === 'listings'){
    const ml = myListings();
    panel.innerHTML = `<h3>My Listings</h3>` + (ml.length ? ml.map(l => `
      <div class="order-row">
        <div class="order-thumb"><img src="${escapeAttr(l.img)}" onerror="this.src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80'"></div>
        <div class="order-info"><div class="name">${escapeHTML(l.title)}</div><div class="meta">${escapeHTML(l.category)} · $${l.price}</div></div>
        <button class="btn-ghost" onclick="deleteListing(${l.id})">Remove</button>
      </div>
    `).join('') : `<div class="empty-state"><div class="big">🚲</div>You haven't listed any bikes yet.<br><br><button class="btn-primary" onclick="goTo('sell')">List a Bike</button></div>`);
  } else if(dashPanel === 'profile'){
    panel.innerHTML = `
      <h3>Profile</h3>
      <div class="field"><label>Name</label><input type="text" value="${escapeAttr(currentUser.name)}" disabled></div>
      <div class="field"><label>Email</label><input type="text" value="${escapeAttr(currentUser.email)}" disabled></div>
      <p class="center-note" style="text-align:left;">This is a front-end demo account stored in your browser only.</p>
    `;
  }
}
function orderRowHTML(o){
  const first = o.items[0];
  return `
  <div class="order-row">
    <div class="order-thumb"><img src="${escapeAttr(first.img)}" onerror="this.src='https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80'"></div>
    <div class="order-info">
      <div class="name">${escapeHTML(first.title)}${o.items.length>1 ? ' + '+(o.items.length-1)+' more' : ''}</div>
      <div class="meta">${o.id} · ${new Date(o.date).toLocaleDateString()} · $${o.total}</div>
    </div>
    <span class="status-pill confirmed">${o.status}</span>
  </div>`;
}
function deleteListing(id){
  listings = listings.filter(l => l.id !== id);
  persistAll();
  renderDashBody();
  showToast('Listing removed.');
}

/* ===================================================================
   UTIL
=================================================================== */
function escapeHTML(str){ return String(str).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }
function escapeAttr(str){ return escapeHTML(str); }

let toastTimer;
function showToast(msg){
  clearTimeout(toastTimer);
  let t = document.getElementById('toastEl');
  if(t) t.remove();
  t = document.createElement('div');
  t.id = 'toastEl';
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  toastTimer = setTimeout(()=> t.remove(), 2400);
}

/* ===================================================================
   INIT
=================================================================== */
renderAuthArea();
renderFeatured();
updateCartCount();
goTo('home');
