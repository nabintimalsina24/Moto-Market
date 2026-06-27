/* ===================================================================
   DATA
=================================================================== */
const BIKES = [


  //----- Helmet-----//

  {id:1, title:"AGV", category:"Helmet", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR40578Zxww7uv0DuMFVjdqPUZnun3yINpmGUfNnmNpIg&s=10"},




  {id:1, title:"Shoei", category:"Helmet", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://elite-exclusives.co.uk/wp-content/uploads/2023/01/Marc-Marquez-2019-helmet-1_8-2.jpg"},
  

  {id:1, title:"KYT", category:"Helmet", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://images.openai.com/static-rsc-4/2BIyBd_ylaHlHHYX-unogTOBfy-GpqJWOPpGwjKm3VxStqCPcq_goaJukn_t2dSKS0EKnM8OUgmT7bSv8FgvS0OSodHYRh2UzBkj5QRMK7sSoBhtTXW0ol0uq1h7LjBI3PbCatbtyRjRCh7QXtM7yW0buhCMcbkW1Z9kyP1XH7ajePng8BOxIXW9t_cPjKdo?purpose=fullsize"},
  

  {id:1, title:"Steelbird", category:"Helmet", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://images.openai.com/static-rsc-4/fxVpQ7hA6pWCLNfq6swCWPewbB07x4obHHzQE5IdmfcE1QMOk1E0MV4qgGyEmXT3gqNmOsyrX_7WNh-X3eKT5NvvyCluGHAhQm2hf71t91tB4JYjcgcf79hMpH9k0bBzoWTQOZuwGMHADk3oLGIwb-7hm28_gH5m1pekFeHUZXjDnF9UdpbjgXIvU2eT3V1E?purpose=fullsize"},


  {id:1, title:"LS2", category:"Helmet", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://cdn-iutgbvdd.sportsbikeshop.co.uk/image/upload/c_fill,h_600,w_600/product/907508_1.jpg"},


{id:1, title:"Arai", category:"Helmet", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://images.openai.com/static-rsc-4/ahPXBonmqGes6kaB77LDpYesCUUs2xW4AzHAl0fY9rKr5UnIqc5YTyS3pZBvaYF2GM727F6sYpe-Bp0jdS8uKog9dJq1FkzZ_OAirZHeOSu9oivlM0sm6qS5CV93yRzMVHp7g-2PvF16NlUrpSnZA4bghJB4c_8-bs7sDZ4E8IGxuxNO_r81OgDgbUNR_elK?purpose=fullsize"},

  

{id:1, title:"SMK", category:"Helmet", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://images.openai.com/static-rsc-4/53aQNAto-K-pHfsC4NPh28aklqMwpyuqnsPnosXAuJi1GR9LTQ9dqG3-9uYGDwCjzkCWY5pVTc-xsxlpxV3VvBq4FNDnTQDXkBzhrfVFCtctkqBy9lwupWoW-f4TidjfqmyYs-j_I_DZU8OpmVtOheQh9Dax-5E0Uffj9BfbgsHqpNSgyDbeX5ejuMUg8CsJ?purpose=fullsize"},


{id:1, title:"Leatt", category:"Helmet", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://images.openai.com/static-rsc-4/49nF4NN-VyExHXdMII7eD0slDPgl-y5T4BavfvgYkP9-MYbmDI-y-oUZ65OH05nzq7pZXHZvVFHR0pVP1Hjg5NP60XXXZTUkGbF_O3eccW23uKfZ_hRx3Cq37LBL6pOh5VyTmCwwISA1r0WkhcxeJbp1g02FCfzntfo-tvXcoGnc3SFIpV9BQqDBsAvz47op?purpose=fullsize"},









  //----- Scooter-----//

  {id:1, title:"Trek Marlin 7", category:"Scooter", price:780, specs:"21-speed · Frame M · Disc brakes", img:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80"},













//----Cycle----//


  {id:2, title:"Cannondale CAAD13", category:"Cycle", price:1450, specs:"Carbon fork · 105 groupset · Size 54", img:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=700&q=80"},





        /*---- CrossFire Bikes ----*/

  {id:6, title:"Crossfire XR 250 — 250cc", category:"CrossFire", price:980, specs:"Aluminum frame · Shimano Claris", img:"https://images.openai.com/static-rsc-4/mtNP6a8QVn6ystJgnqpobdfIGxarlYfq8wwZt8VjZzjVrwRMPjZFMtkV9Pqr1RAOGJp1_8YcDumpnXSN_IcTLaFyxGT0EjTKWW1GkyymRZpO6BCVB7WT85gmy5oF20ip2jKwpKiXji2ngXR1b48eSAvB4bxc_UDPrPtend3mjLBjsf4iVB2TKqG10KVCACeg?purpose=fullsize"},




{id:6, title:"Crossfire GR7 — 250cc–300cc", category:"CrossFire", price:980, specs:"Aluminum frame · Shimano Claris", img:"https://images.openai.com/static-rsc-4/uie9RElpKTiGU3Kba4jz6vr8XI46aLSRPbN4YRIwSQak3tT-Q4NDkznaQ7ysHRb7aLl5NcaGWNK3sSnX48W7I7xIWnJTOlQT1ruW53ymI1wgQcLG09PwtN3RszcfVvo2nd1ehn-jnrr9cIQjHK-7CO8W2uFq1e6E07JkCO-ZG9Ocu1j8hRbqN6E-0AP71I57?purpose=fullsize"},




{id:6, title:"Crossfire RM 250 — 250cc", category:"CrossFire", price:980, specs:"Aluminum frame · Shimano Claris", img:"https://images.openai.com/static-rsc-4/WO685DIsH8kQEp0VeqxwhnGIET9EgcyHpdvv6zhwm18I13eCwUb5UOumbjZ5pvmBcY8u8X3Ul3R2V631QJZGF2aBxw6FBL1o0Zi2qV6MEgHkLUc-1H1O8FiGhfFoSDomx1rLSryyUSZXN2uk5bJ1xRfJ3V-1mGtFu6ZrUiGGhH2JXPcn2R_RsRk4kX422_AP?purpose=fullsize"},



{id:6, title:"Crossfire CX 250", category:"CrossFire", price:980, specs:"Aluminum frame · Shimano Claris", img:"https://images.openai.com/static-rsc-4/alFMDLjedkhhhK7WzoniAJ4jcMDu5mVaY_gm59A11b6dKXl6ofuD_N-kwSZ8c0ydnANUjDIyIaYOt5TaoQOigYlUGGgWp25MD9dC_Thg75Y4lhqHWRHbNRo8FhS12nVq1jkLFfut719raf2lLEWcirExKf6hj1LT8sFg990OHGncT7P39EzDqAGfLeREJL4B?purpose=fullsize"},



{id:6, title:"Crossfire Tracker 250 — 250cc", category:"CrossFire", price:980, specs:"Aluminum frame · Shimano Claris", img:"https://images.openai.com/static-rsc-4/oJ2qApv1aGVdceefnYOQdFlq9ySsVAnjyarfZ9Zs4lpqMplya4GPxVeqeSTR1rs40Mg1R0Lzss-eWXkWxvyh0VrJsWHOINXJRkk0jopsuICgULEQj4ZNtiTbAXIBtYbNCh9iOO-mAVXRTYtlMkF54E5HXdwPl4yVjuUng7Hy1lBg85Kzr8hkvFewE5vHGkoJ?purpose=fullsize"},





/*---- Electric Bikes ----*/

  {id:7, title:"Rad Mini Step-Thru", category:"Electric Bike & Scooters", price:1199, specs:"Foldable · 350W motor", img:"https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=700&q=80"},





/*---- Vintage Bikes ----*/

{id:4, title:"Schwinn Cruiser Classic", category:"Vintage", price:320, specs:"Single speed · Steel frame · Restored", img:"https://images.unsplash.com/photo-1502744688674-c619d1586c9e?w=700&q=80"},


{id:8, title:"YAMAHA RX100", category:"Vintage", price:410, specs:"100cc", img:"https://wallpapercave.com/wp/wp4544374.jpg"},

{id:8, title:"Royal Enfield", category:"Vintage", price:410, specs:"350cc", img:"https://i.pinimg.com/736x/86/7f/a2/867fa2a5733209f22e63b6ec43e39ff8.jpg"},


{id:8, title:"Triumph", category:"Vintage", price:410, specs:"350cc", img:"https://p0.piqsels.com/preview/295/818/497/4k-wallpaper-asphalt-bike-cafe-racer.jpg"},

/*---- Harley-Davidson Bikes ----*/


{id:8, title:"Harley-Davidson Nightster — 975ccr", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://cdn-s3.autocarindia.com/harley-davidson/nightster/2025-nightster-gallery-1.jpg?w=640"},
 


{id:8, title:"Harley-Davidson Sportster S — 1252ccr", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://i.pinimg.com/736x/ec/90/5a/ec905affe1ab68fd111adea02d4cf564.jpg"},


{id:8, title:"Harley-Davidson Fat Boy — 1923cc", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://preview.free3d.com/img/2018/06/2408208613186209667/91tosonj.jpg"},




{id:8, title:"Harley-Davidson Breakout — 1923cc", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://w0.peakpx.com/wallpaper/677/907/HD-wallpaper-harley-davidson-softail-breakout-chopper-cool-motorcycle-american-motorcycles-harley-davidson.jpg"},




{id:8, title:"Harley-Davidson Low Rider S — 1923cc", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://images.openai.com/static-rsc-4/_AGLHCbGm80MS4paw864uWQf7ZEFohOQteZV4Q0ZsPbBm4bCKLXwMzikuM9s7rIc4NQHlKRTHAjuL01PTEsrJfOFx9mMPrEYjBdxH1se8UiB3KlTBP472o-vlxw-I5qsUfM0UZMvf_Mtz5qDR00jB2aUtV9t0MLdxh7_441OCUZMsD3l2mqs5P7n4MlzsjlP?purpose=fullsize"},





{id:8, title:"Harley-Davidson Street Glide — 1923cc", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://w0.peakpx.com/wallpaper/927/741/HD-wallpaper-2012-harley-davidson-street-glide-custom-bagger-bike-2012-chrome.jpg"},



{id:8, title:"Harley-Davidson Road Glide — 1923ccr", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://images.openai.com/static-rsc-4/rXjuHMmtjBTI1sBxEeP0PYEN0zFfUmmy9KfmuZ9tM-3pVO6qpcdSSde_UG90eOk-YR0Gqqd5K_EcLI60ejqk-ayqcpcZTRKnkxB_b8RymvLmsZJWUISCHYw15OznycD-0CcbPv4OYwMFHCis6CX5RPKZ1w1-2ilQKnWMnzSHg5kY3je691uAp8wewaW-eO45?purpose=fullsize"},


{id:8, title:"Harley-Davidson Ultra Limited — 1923cc", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://w0.peakpx.com/wallpaper/503/1023/HD-wallpaper-motorcycle-bike-harley-davidson-vehicles-harley-davidson-electra-glide-ultra-classic.jpg"},


{id:8, title:"Harley-Davidson Pan America 1250 — 1252cc", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://cdn-s3.autocarindia.com/harley-davidson/pan-america/2026-pan-america-st-beauty-ls-1.jpg"},

{id:8, title:"Harley-Davidson Freewheeler", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://cdn.motor1.com/images/mgl/OYJel/s1/harley-davidson-trike.jpg"},


{id:8, title:"Harley-Davidson Tri Glide Ultra", category:"Harley-Davidson", price:410, specs:"3-speed hub · Leather seat", img:"https://i.pinimg.com/736x/bd/48/14/bd4814346b134b0dc6f03d2fe0c26f38.jpg"},










/*---- BMW Bikes ----*/

  {id:10, title:"Trek Domane SL5", category:"BMW", price:1890, specs:"Endurance geometry · Carbon", img:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=700&q=80"},


  




















  /*---- Kawasaki Bikes ----*/

  {id:11, title:"Diamondback Atroz", category:"Kawasaki", price:560, specs:"Full suspension · 27.5in", img:"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=700&q=80"},




  /*---- Suzuki Bikes ----*/

  {id:12, title:"Vintage Peugeot Road", category:"Suzuki", price:275, specs:"Original 1978 frame · Restored gears", img:"https://images.unsplash.com/photo-1517649763962-0c623066013b?w=700&q=80"},




  //---- Yamaha Bikes ----//

  {id:13, title:"Yamaha R15 V4", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://i.pinimg.com/736x/3a/51/eb/3a51ebc1c374b913e7dc18b43c4f4a4e.jpg"},



{id:13, title:"Yamaha FZ Fi", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://images.openai.com/static-rsc-4/NBNspeSc81GajQ0RxIRcGXAf2M69Nj6XqINrPBmHCYCxJejufcngnVpjg_qWkbiyP2Vj2kOgaDlykJmAPcOEcS9ZqfFLO_CIUWxev6uGtDCtF4HLlhhyDU2OI4IA-U7Ev5NOLmjY2OKxWXHjaaNurXmSZ4_0VlsijWkZQZv5rbrydaNu-fkhI0g2wWCj8EL4?purpose=fullsize"},


{id:13, title:"Yamaha FZ-S Fi V4", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://images.openai.com/static-rsc-4/1aUmPXEF7iXM7SEhp5Ys_3KYciTvTAJG5N-Bqw0g7fIanoAmWENLIOqT5wwORKXRaS7bOj5JFE6yvvzyeVjyoxQmm4DSu9H797eRId3rEylTjY0f-wABl_c_Jh_7HUZg1DNl8bfG_3oVOOJ8O0VEPe2Uw4EIt6C64UaHXiCHh5amduZIeVxm0wA5FpYkowF6?purpose=fullsize"},




{id:13, title:"Yamaha FZ-X", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://wallpapercave.com/wp/wp9576327.jpg"},


{id:13, title:"Yamaha MT-03", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://images.openai.com/static-rsc-4/L8tgJry4JneofvuEmCsyjxRF70r0qiD3Xh0D6L-e0UefJMsyAsYheg0zUTe12sOEN_UBHc8dsTLunQDk3QdouqmmlBYoxrKjaRYwcIks_kQghtuQekD-OKfr02fKUoVr23TYSo8iaDa9dHZ3RH0QPCmz8bZ5P0VhHT2xdA1KqPzB1W3AW6knzsv_cow5YABv?purpose=fullsize"},


{id:13, title:"Yamaha MT-07", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC4OR9WwHYFODaKy_G2DU2vMQ6nVDXvwNVioKDrFlYei07ecOlhRNfwVn1&s=10"},


{id:13, title:"Yamaha MT-09", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://wallpapercave.com/wp/wp3063463.jpg"},


{id:13, title:"Yamaha MT-10", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://wallpapercat.com/w/full/0/d/2/1712764-3000x2000-desktop-hd-yamaha-mt-10-background-photo.jpg"},


{id:13, title:"Yamaha XSR155", category:"Yamaha", price:4200, specs:"155cc · Liquid-cooled · 6-speed", img:"https://images.openai.com/static-rsc-4/isXC-rCwc3qkpRNkzenOT1eJLjYbmXB-C3pOYPLSFclraTOtif_Sav77xJURKqa5tWWyjqJTfKE9JhQVBL4nPxuokgpN0gYl6efo_7t892B6WLhujE44wmjIkLa2t5E4Wtoh6yoGMWwcc5zuHYve2XG7bk3rt1XcaM4RV3kjRLsS3Fc7qOKq3DZl4yDHySf2?purpose=fullsize"},


{id:13, title:"Yamaha XSR700", category:"Yamaha", price:4200, specs:"700cc · Liquid-cooled · 6-speed", img:"https://images.openai.com/static-rsc-4/ev5tj7zYgLUo2xiQ7eNnb-NHxBy3pjdjBZQvz7MnuyuOedkZY0VUKubt2eSbuL7_Bwb0-_ZQgZSQlxFRkr2u9zvCbzB4f1gdnNb65R9eLr6k0v0iT-e6TasG5PARNW60uis0SPYkuigBYiZ5HHQ7YrcqglYXljqjsf_Sq5aVIK7FeHKJkzam7YWLtDgowhZa?purpose=fullsize"},



{id:13, title:"Yamaha XSR900", category:"Yamaha", price:4200, specs:"900cc · Liquid-cooled · 6-speed", img:"https://images.openai.com/static-rsc-4/0iz0ATPzsmGmj768F2XHgUEkYxhTk6PLKXh2Aay9GVcjsXxEaw2TuiUuGrlbHAhKqdFrZy7WpuwQ_vHcrvONmZcVhMxlVZ2c7SCbgpG_OGumY7OoZaA5O2VGBQQRxYUFBdoA-LfF1YpaIy-JBJNx5448vIEmspwTuFMVjEq5TLsJY3sfdTUOIOFM2aMaUQJ4?purpose=fullsize"},


{id:13, title:"Yamaha R3 — 321cc", category:"Yamaha", price:4200, specs:"321cc · Liquid-cooled · 6-speed", img:"https://images5.1000ps.net/images_bikekat/2019/4-Yamaha/7961-YZF-R3/001.jpg?format=webp&quality=80&trim.threshold=80&trim.percentpadding=1&scale=both&width=1168&height=664&bgcolor=rgba_39_42_44_0&mode=pad"},


{id:13, title:"Yamaha R7 — 689cc", category:"Yamaha", price:4200, specs:"689cc · Liquid-cooled · 6-speed", img:"https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZF700R7/2026-Yamaha-YZF700R7-EU-NA-Detail-002-03_Mobile.jpg"},


{id:13, title:"Yamaha YZF-R1 — 998cc", category:"Yamaha", price:4200, specs:"998cc · Liquid-cooled · 6-speed", img:"https://images.openai.com/static-rsc-4/X-H32C9IDuFXNfTxhp6GH-Eh0Yqwa3DkEai-ZkqGS3uFLygV_SEFkaHVJ2_TUqZ73i_-ZzLHKuIhUj7JTVdNcdzMR52pF2F-wFB5neR4DkxuN3bC0vfoRoAFXzEaHunS6KYnlH3DgZEIMNaqWQ-Iqc8tfRqmcboFuV5xAUQY4ExMZFviGrSg8gm0TacqmA8f?purpose=fullsize"},


{id:13, title:"Yamaha YZF-R1M — 998cc", category:"Yamaha", price:4200, specs:"998cc · Liquid-cooled · 6-speed", img:"https://c4.wallpaperflare.com/wallpaper/929/297/283/4k-2018-yamaha-yzf-r1m-wallpaper-preview.jpg"},













  {id:14, title:"Yamaha MT-15", category:"Yamaha", price:3950, specs:"Naked street · 155cc · LED lighting", img:"https://iamabiker.com/wp-content/uploads/2022/07/Yamaha-MT-15-V2-HD-wallpaper-1-1536x864.jpg"},




{id:14, title:"Yamaha YZF-R1 — 998cc", category:"Yamaha", price:3950, specs:"Naked street · 998cc · LED lighting", img:"https://images4.alphacoders.com/128/thumb-1920-1280019.jpg"},




{id:14, title:"Yamaha MT-09 — 890cc", category:"Yamaha", price:3950, specs:"Naked street · 890cc · LED lighting", img:"https://i.pinimg.com/736x/1f/ff/2b/1fff2b1f975a7161ae5dbdcc8e23b5c9.jpg"},





{id:14, title:"Yamaha Tracer 9 — 890cc", category:"Yamaha", price:3950, specs:"Naked street · 890cc · LED lighting", img:"https://wallpapercat.com/w/full/d/9/a/11319-2000x1125-desktop-hd-yamaha-tracer-9-gt-wallpaper-photo.jpg"},


{id:14, title:"Yamaha XSR125c", category:"Yamaha", price:3950, specs:"Naked street · 125cc · LED lighting", img:"https://images.openai.com/static-rsc-4/VPtBV1Yo8v39U0bVU9BB1HS8nLGZ18YUpNiJM5fUgTeFvSDEu6qHSUtbrmlMylem-h2jBkPtWvQ95w2sxGRv0i9v3DoxwWHoEIDKFLCA9uOiXLEr6S-1LJ6BOIGPf12yhVoX4CtWhPwzpIjrCm9dSgvxqENkv_n7sBHVGU9Jg3CL4oLL15cMHIfk7KCYlkzm?purpose=fullsize"},






{id:14, title:"Yamaha XSR155", category:"Yamaha", price:3950, specs:"Naked street · 155cc · LED lighting", img:"https://images.openai.com/static-rsc-4/isXC-rCwc3qkpRNkzenOT1eJLjYbmXB-C3pOYPLSFclraTOtif_Sav77xJURKqa5tWWyjqJTfKE9JhQVBL4nPxuokgpN0gYl6efo_7t892B6WLhujE44wmjIkLa2t5E4Wtoh6yoGMWwcc5zuHYve2XG7bk3rt1XcaM4RV3kjRLsS3Fc7qOKq3DZl4yDHySf2?purpose=fullsize"},






{id:14, title:"Yamaha XSR700", category:"Yamaha", price:3950, specs:"Naked street · 700cc · LED lighting", img:"https://images.openai.com/static-rsc-4/ev5tj7zYgLUo2xiQ7eNnb-NHxBy3pjdjBZQvz7MnuyuOedkZY0VUKubt2eSbuL7_Bwb0-_ZQgZSQlxFRkr2u9zvCbzB4f1gdnNb65R9eLr6k0v0iT-e6TasG5PARNW60uis0SPYkuigBYiZ5HHQ7YrcqglYXljqjsf_Sq5aVIK7FeHKJkzam7YWLtDgowhZa?purpose=fullsize"},


{id:14, title:"Yamaha XSR900", category:"Yamaha", price:3950, specs:"Naked street · 900cc · LED lighting", img:"https://images.openai.com/static-rsc-4/0iz0ATPzsmGmj768F2XHgUEkYxhTk6PLKXh2Aay9GVcjsXxEaw2TuiUuGrlbHAhKqdFrZy7WpuwQ_vHcrvONmZcVhMxlVZ2c7SCbgpG_OGumY7OoZaA5O2VGBQQRxYUFBdoA-LfF1YpaIy-JBJNx5448vIEmspwTuFMVjEq5TLsJY3sfdTUOIOFM2aMaUQJ4?purpose=fullsize"},



{id:14, title:"Yamaha WR155R", category:"Yamaha", price:3950, specs:"Naked street · 155cc · LED lighting", img:"https://images.openai.com/static-rsc-4/tpMr7n29KGiH1KgyaI0T1lUQ6ecmd1kc0ed4Xj262YEC2DksOvj7uLEp29SbI96dOm2G1ttct02dSh-pgBqzIWJ1s_f-E6r0zWbvFB1arQLhQfCSqt4uBGYCN1hnXt7gBOPg9A67m924CiWbD30RIlzaR5tcOWdasoEaUu0c8IZnVvJECVwUCiokmV1D7gLn?purpose=fullsize"},


{id:14, title:"Yamaha YZ125", category:"Yamaha", price:3950, specs:"Naked street · 125cc · LED lighting", img:"https://images.openai.com/static-rsc-4/6Vnf4atAkQ73q3cQt3GZaiHwxGdy8i9KkwYjGs2jAsmMWGeAN1zFCDI1-Sr7vpaYzO2tFEFz5Ut7AN9UdNm1zt00ZTMgTOvALDFTC7VcfEnfsT2k52Re8YL2Y0LpV8Wt4lnw3jmyiLh5Pl-KMTSGMSuHTfem8A4dAMWR6xz3TqahiEhmn9O-iRTAAbGOAZ2O?purpose=fullsize"},




{id:14, title:"Yamaha YZ450F", category:"Yamaha", price:3950, specs:"Naked street · 450cc · LED lighting", img:"https://images.openai.com/static-rsc-4/kLnfBa0Z1lyDuflu4Qq0mwYnXN8oqwZd6zLusplkjS3wsC5GPptAn2nMpug4ltDrEmbgS0Hzg_vY3dTXrMz2j1kz_bdhvul5dKOdxp42Yp55keFxCFW-VGH6kHUymueqcgb8osCXZ6v_BeFxkGPMLpnCM_zNcmRsPtlfrBtm54sg8teZOGlXC597pR5ZrPy_?purpose=fullsize"},





{id:14, title:"Yamaha Tracer 7 — 689cc", category:"Yamaha", price:3950, specs:"Naked street · 689cc · LED lighting", img:"https://b1944490.smushcdn.com/1944490/wp-content/uploads/sites/46/2025/05/2025_yam_mt07tr_eu_vrsk_sta_001_03_preview.jpg?lossy=2&strip=1&webp=1"},




{id:14, title:"Yamaha R9 — 890cc", category:"Yamaha", price:3950, specs:"Naked street · 890cc · LED lighting", img:"https://roaddirt.tv/wp-content/uploads/2025/03/2025_Yamaha_R9_PIR-Statics_IntensityWhite_Redline-JosephAgustinPhoto-DSC07222.jpg"},


  













{id:14, title:"Yamaha Tenere 700", category:"Yamaha", price:3950, specs:"Naked street · 700cc · LED lighting", img:"https://images.openai.com/static-rsc-4/PndemwXZozPeen2kx2NbcsSmMZGwk0zyTw2s0Y9pd7LVxesGr_OPDerg5LOJYa4Ry0GKwBpo0Z20R6zSczj6dNP_tVqq8cEKkOggF6x7Oiche-cbajW3KuuTORkVsrHhLSp8ju0rhxgF-LsadAhS2ypBk1rVHD3Nxjg-QzE0d-2eCVr4UNpMQWIwCZ-om-_e?purpose=fullsize"},




{id:14, title:"Yamaha FZ-S Fi V4 — 149cc", category:"Yamaha", price:12500, specs:"Naked street · 149cc · 4-cylinder", img:"https://images.openai.com/static-rsc-4/1aUmPXEF7iXM7SEhp5Ys_3KYciTvTAJG5N-Bqw0g7fIanoAmWENLIOqT5wwORKXRaS7bOj5JFE6yvvzyeVjyoxQmm4DSu9H797eRId3rEylTjY0f-wABl_c_Jh_7HUZg1DNl8bfG_3oVOOJ8O0VEPe2Uw4EIt6C64UaHXiCHh5amduZIeVxm0wA5FpYkowF6?purpose=fullsize"},






  {id:14, title:"Yamaha YZF-R6", category:"Yamaha", price:12500, specs:"Naked street · 599cc · 4-cylinder", img:"https://i.pinimg.com/736x/26/63/cc/2663ccecee16ace113ab7358749d6557.jpg"},

   {id:14, title:"Yamaha RX100", category:"Yamaha", price:1250, specs:"RX KING .100cc", img:"https://images.openai.com/static-rsc-4/mUid5S5xK2KEo904-IUO5EeZjujBHwdMGSibep3hj2SBzb90yABvsGJrYBT23WWZ4k5nBbFvHug6_t1TkRsiIOV8pmrJnXQvBoUwitjEv20JsjbL466qYQ5Z1_HS50YyFQLatSZwdgWPOcUXYYEpJ8ZXx_hkDvLfuIYeZkKdByTP4OTpM0ArWbKZbhoqrlZF?purpose=fullsize"},
  


   //---- KTM Bikes ----//


  {id:15, title:"KTM Duke 390", category:"KTM", price:5800, specs:"373cc single · TFT display · ABS", img:"https://images.unsplash.com/photo-1608975213589-14e7f23aeab7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVrZSUyMDM5MHxlbnwwfHwwfHx8MA%3D%3D"},
  
  {id:16, title:"KTM 1390 Super Duke R", category:"KTM", price:12000, specs:"190 HP.V-Twin", img:"https://i.pinimg.com/1200x/af/f1/62/aff162e5c6474dea2f8c1fe3ba04887c.jpg"},

{id:16, title:"KTM RC 390", category:"KTM", price:6100, specs:"Track-focused fairing · Slipper clutch", img:"https://i.pinimg.com/736x/91/bf/19/91bf193473f61501b1557ed2d0794c75.jpg"},

/*---- Honda Bikes ----*/

  {id:17, title:"Honda CBR1000RR-R Fireblade", category:"Honda", price:28999, specs:"999cc MotoGP-inspired Aerodynamics", img:"https://4kwallpapers.com/images/walls/thumbs_2t/6942.jpg"},

  {id:18, title:"Honda CBR600R", category:"Honda", price:9200, specs:"600cc inline-4 · Sport fairing", img:"https://w0.peakpx.com/wallpaper/83/457/HD-wallpaper-honda-motorcycle-honda-cbr600rr-vehicles.jpg"},


  {id:18, title:"Honda CBR250R", category:"Honda", price:9200, specs:"250cc inline-4 · Sport fairing", img:"https://imgcdn.zigwheels.my/large/gallery/exterior/60/876/honda-cbr250-marketing-image-232404.jpg"},




  {id:18, title:"Honda CBR500R", category:"Honda", price:9200, specs:"500cc inline-4 · Sport fairing", img:"https://w0.peakpx.com/wallpaper/83/457/HD-wallpaper-honda-motorcycle-honda-cbr600rr-vehicles.jpg"},




  {id:18, title:"Honda CBR250RR", category:"Honda", price:9200, specs:"250cc inline-4 · Sport fairing", img:"https://wallpaperaccess.com/full/3593094.jpg"},



 {id:18, title:"Honda CBR150R", category:"Honda", price:9200, specs:"150cc inline-4 · Sport fairing", img:"https://wallpapercave.com/wp/wp11814138.jpg"},




{id:18, title:"Honda Shine", category:"Honda", price:900, specs:"125 cc inline-4", img:"https://images.openai.com/static-rsc-4/TB6TUa6kqAR9sg0Enh_DUrSOHUPZdqQRD_JjeLPax8WjkT4dMrPoTgMBjY3HekhMMz3MvEoRUFck1eXLFMpkJLdtq06m7PiM3jOSmmgEAZ8yWxiZPCU4r8WBmQcZn-NwQfjgIuIG80aIzSzlzKczGfjPoPbZ8hZuwD4Ar-OEiSMhH-fi6j6IupD0RlSLxJh-?purpose=fullsize"},




{id:18, title:"Honda Gold Wing", category:"Honda", price:25000, specs:"1833cc 6-cylinder engine", img:"https://www.motorcyclecruiser.com/resizer/nrk2Ft6YVRf-H3oYZNs2zRAup5A=/1000x750/filters:focal(45x45:55x55)/cloudfront-us-east-1.images.arcpublishing.com/octane/HMWD4LG2476JUDJP3HHHSTHQQQ.jpg"},



{id:18, title:"Honda CRF110F", category:"Honda", price:9200, specs:"110cc single-cylinder · Trail-ready", img:"https://images.openai.com/static-rsc-4/dCD2kqbNI6wF29Mmhro9YpQZ6e46ve0Rl3gpVti_BjSt3CmZy8a1_oYfe1zMHa15h3AoHiGuWnpEwb7DCWSDNSsRJrlV-exgrZdgrJA66UZ9Qjix273MBjXzjhhJ6npQXSsaRqTFrz5xbSOH15OadhorWvYM60VjBQ330QGiB41eNG_Y38ABS4F6AApRLTTF?purpose=fullsize"},

{id:18, title:"Honda CRF125F", category:"Honda", price:9200, specs:"125cc single-cylinder · Trail-ready ", img:"https://images.openai.com/static-rsc-4/iAVAbIQkpyF-TS3mzC3KGmJYYfpa9PQN69NCHMyrTk6ukRJ-TlpWzFFulXK7TNgRE0urWcIboitIwnZnFTNKStBumObEuEltYLq06lRuhgnFYutR37UJJOxKaFfMWuF3xk8Jbr7xl3b78wyYiAEeEM7yUwGu3Z8ykOsHZrBbKqCAqjj_UOELqsxSSXC3p_82?purpose=fullsize"},



{id:18, title:"Honda CRF150R", category:"Honda", price:9200, specs:"150cc single-cylinder · Trail-ready", img:"https://images.openai.com/static-rsc-4/oBH__QJHwwRgpwXXRvauEealvTTUD2skZ9LZcktt5BRZdJ9nSL1S5_is1mpShgj4iOsizvz4sx_U-nap-n8n3ruTI3yT2JvAIUKVbIjfmaGgC5fpVNU1Ae5dDq7F642cByyTUHXMP6NZkaeqhGOsmMhH02S4nvPs6nCvFN9-jGQPlYs5QFLt6fEjVaX6eNNY?purpose=fullsize"},


{id:18, title:"Honda CRF250R", category:"Honda", price:9200, specs:"250cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/3zWA0be08t_Gq14DcRLj5a14tAuAmjLjR_8hj_5ENCDKeKJT7SJaNNG-J_ajEI37e9EhC0Kmizcey7nYSqPFU514T4ZAoviqS96ENmlN3_v2P4AFZXDshwDo2-RpL0mfm2FJuqoFNB0KNqsJfz9bGzBuoyzsErswkNZ37GVZr_t3eeQCRGYl2MBli9JNNUz-?purpose=fullsize"},


{id:18, title:"Honda CRF250RX", category:"Honda", price:9200, specs:"250cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/M1F3P0rQx9DQ_JeTL-ACW6LEqJ8AOxoP7ICSUA8AYq_m5m2XSEjsCgGuUdiiZ1twmWFi79F7ixnMkUzfTU7cguP-LqZmE4FrvO5EyoJR67cFvZnGly6dj4OablO1wNDJBFLUlmgQ8xDW0JX9oNrh7t9htbH4byWFZl7b5o8KKTuY981Y-Ss4CaYK9FAZoMz9?purpose=fullsize"},








{id:18, title:"Honda CRF450RX", category:"Honda", price:9200, specs:"450cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/25Q80s8YOS7m7ToGzQl9Hz4mTmTt172aHWKgRwMYbw8wKNFnKRuU8CINTxhJL81xaleI9kGiHdLUyq-J-cAIN76HmuSibP5Q9goD5ZW0Oc9nwekBKuSEalAayjRqco9AgHvNLyO30ZLJ5nrsSt044x_EhzF6G2Uol4stbbX0EvgTaOGOCjrbec3LHOyG417V?purpose=fullsize"},





{id:18, title:"Honda CRF450R", category:"Honda", price:9200, specs:"450cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/FFHyjHkGFz-NWgibWtsbI70GBYzd5LjwFv3-v5mQtedBAdaC3XYpjSxl49dZhzXcOIWIoh7BD9aGHQFsgbBUygR4z4SrfEnSOhURVqnsb7znksgOAak-7n8U75BFNDZPrXZ8OQYZbDzamOsmcoB3aTtBzWxzVDBkWehK2Gf-ZEz35R7A-SnZ6sgLxhNBXSnO?purpose=fullsize"},








{id:18, title:"Honda CRF450RWE", category:"Honda", price:9200, specs:"450cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/csacrzKQtyxVmKTyiXpjw0VdmaW7GnrXxGLbDz2b4wwZ-uqcIMZk7rImNNpDHY2dsdLjsZbQ76d5cPKrIjydYOoFIhtZ4G9Nisx9L1FxHuQYoZ8XxhPCPjCu6oJqaw8u_DzwgmPqjQ7bQ3IOESJNLRjcB3VTWZRXEVDO6DhpF6R_YtJrfZQ9BhCQmiYBWR-_?purpose=fullsize"},



{id:18, title:"Honda CRF300L", category:"Honda", price:9200, specs:"3 00cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/QUwQTXPDSIB2n-9PqM1lKweWRb72_U2du9f-HimcFDNK8kGm8nyZZt8OztisaZki99jIGta0iWBCc53P0UsVVRMo-H3O9WqHXSNaDYgbfHAJgQsucIAEdHmCl_2cDoJjzdJjdBEjHZRfAXSjSAn8HKrblGNT2Qoyq-gsakeCwhOMA6MojpNV_ojknSMuIXhj?purpose=fullsize"},


{id:18, title:"Honda CRF300 Rally", category:"Honda", price:9200, specs:"300cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/ig4MmKOtV5kM29Fo4vEzhJO3eDHZb3mYaJEmUrojDYvj2RVBbM16MQ6sV1ojbUovMaWuHki2AgjRYd72jI1kx0RP_xvpdPZJchJQye8BAHAI7vTc-fC_X9bA_V-Me48CLCvspvytzB95Z5IhoVEdXCGC7jEMgeGQ9JMYeqBBW06Y68jFqXM90Mx5uzYDm_nq?purpose=fullsize"},

{id:18, title:"Honda XR150L", category:"Honda", price:9200, specs:"150cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/neb6zyuHiyqAO4aBUX97l3HogYT8XPdaH-HmctglC9Hn8VOwr2FyeBDNA0b2qPwKlLjW-v0MOlv3HM0TZWj-osU7Ng0SDVHbGsM_QiKy-QiRtUV3bSdb3ZgJzWXvOO_jnCDL19tBuMvYsQPANNvPCIeZdWqqaRPT88rYklqmNsIicBZPYMEkQLPdPdIQ0Occ?purpose=fullsize"},








{id:18, title:"Honda CB150R", category:"Honda", price:9200, specs:"150cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/C7nAGN7V3z6e9Xe6KukW2TFwkDpGZMRCnPQGAwlOYOf2GEvqG6mBVxcWsBZ7hLtlE0XZO_P_Zv4nlFfp7Ct9w_Z8vIyUuel8aKWERedCBpmIcRwx3Ex0EGKEZxfeKRmVtSTidHtjtMVYtU4SMrOwJzez4qNml6jKkCvnKJ16iPxBZHN_mxuEQHdkXnXAWwdH?purpose=fullsize"},


{id:18, title:"Honda CB300R", category:"Honda", price:9200, specs:"300cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/rgZpW64GhotEwtP5EG0x3537bZj-B8s6WqP2NuagHEGh3RJqfS2Sa-vqC8-Dr3UsCQzbQsKcBziqYR-gYsFIi05Cwqpi3PCKAqD9GsCLL--zth_3cTqQBrm2z5ELvXJS1R2DE0s-qv9Ui3RIJzG2XopxWfJeKc6Wm-N84VLPvE8TjcUjqQ0hWE1WDwNd8YWb?purpose=fullsize"},


{id:18, title:"Honda CB650R", category:"Honda", price:9200, specs:"650cc inline-4 · Sport fairing", img:"https://w0.peakpx.com/wallpaper/299/636/HD-wallpaper-honda-neo-sports-cafe-cb650r-motorcycle-side-view-vehicle.jpg"},



{id:18, title:"Honda CB750 Hornet", category:"Honda", price:9200, specs:"750cc inline-4 · Sport fairing", img:"https://static0.topspeedimages.com/wordpress/wp-content/uploads/2025/03/fb_r_w.png?w=1600&h=900&fit=crop"},



{id:18, title:"Honda CB1000 Hornet", category:"Honda", price:9200, specs:"1000cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/C5rvJyRuI2jLFVchkNKswGONywswp7SoyTehXVuPFaL_o5CUlM-9aRn0l8jlDTkm0oUTuKaNhjbpla0rc0qzMJ_x54OROKFZ60NwgP-KLQR7QzVqwI3u62oOIlJi5rk6fMx9WqOf3Gsg11SYfWnQ-8F5UrMtE7iCcfV4z0E5lxOC1pbKPbX52pMZHup-NK8N?purpose=fullsize"},




{id:18, title:"Honda NX500", category:"Honda", price:9200, specs:"500cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/U-aXJ-M4oIEtCWEDPvvMEBedM2pbSrRxUskLStIjStl-tc8dwqUplOilAbU2-kDLoCNsrYVjaOzoZTC7eFhulp-q_73CLlZLWiKECBQMj4OUgW8sEwndJhbDC5Nep8CaayfXY9tS4viwRYEAlCXEtpX1okesMa2s3o__YJIQo-Kj8PdsnM2EKtfzK8e2JINs?purpose=fullsize"},


{id:18, title:"Honda XL750 Transalp", category:"Honda", price:9200, specs:"750cc inline-4 · Sport fairing", img:"https://imgcdn.zigwheels.my/large/gallery/exterior/60/1976/honda-xl-750-transalp-slant-rear-view-full-image-982220.jpg"},


{id:18, title:"Honda Africa Twin", category:"Honda", price:9200, specs:"450cc inline-4 · Sport fairing", img:"https://cdn.wallpapersafari.com/21/21/JAQdOb.jpg"},


{id:18, title:"Honda Rebel 300", category:"Honda", price:9200, specs:"300cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/CZFDGqqRSJ4G9_CYqUB_hUoeN3mQUj5Te1vI3cbEtNIt6KkHJlmtGUNLGkHHXignGb2JSXVkg-dRd84cRgVJrkpZpvKZHMQPT0t5qaYliKoL1r0csYg720tCnrWBabRSSsGOEqO2qMpOwDnBbbTTEil_Cmd9rmIacYx4qiWBiTECU_PAFBREnEzSKG3kViir?purpose=fullsize"},


{id:18, title:"Honda Rebel 500", category:"Honda", price:9200, specs:"500cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/0a-keJ1qn23O663p7bziGLgg10HerUbEF6xKjfjxtNdkWW38zUKjd9AYDXWqQ-DqU3Tthd_7irlOkypm6WrY392USD_F-W93HNQierto4UmVJ0n4-wJsU3Y4bWLcIC4KZ8DmeBdwyqXlAii0IN4llSv4aCTgCmAfpeWemJu3_Cti79XSapRcc2s2bMTP3onC?purpose=fullsize"},


{id:18, title:"Honda Rebel 1100", category:"Honda", price:9200, specs:"1100cc inline-4 · Sport fairing", img:"https://4kwallpapers.com/images/wallpapers/honda-cmx-1100-rebel-street-bikes-2021-dark-background-3800x2160-5954.jpg"},





{id:18, title:"Honda Unicorn", category:"Honda", price:9200, specs:"450cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/LDHWqPTDGa-C47SH5DIjF25t2xkpoZdrwf0urGnxgyMdDVEEHTgLXzpkiH6J4dQHpPhc0AqC3ENRZkfzQtY1Hidn5kvrquScTBirF7QpeSGfSSXcgNbJPNwQ8_0SjBUh6ykE65tlcM0xEFnzQL_ZthDp63GEWEk2hyRVB3u-LiMVqkSGlBZEe_hRTN7QUBhG?purpose=fullsize"},




{id:18, title:"Honda Hornet 2.0", category:"Honda", price:9200, specs:"450cc inline-4 · Sport fairing", img:"https://pbs.twimg.com/media/GVatCv9WsAAupll.jpg"},


{id:18, title:"Honda SP 125", category:"Honda", price:9200, specs:"125cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/raaYg9URJAADSnNQzuNp5YW5sw-MXxz32e8tLWar-8jWdn3J4ciCqtIhRBn7MXZF6pW0T1jwLfZhJQPR3djPcvSsQQalyyan5nQ0_LMi6GqV6rD7Sa2dPKL1418_jIS4ZSHXzZWsD3pW3Iqg_nrogXgcJe77WvtXK46q1CbD3BKRkPvii7TE65nT60IyVwRL?purpose=fullsize"},


{id:18, title:"Honda XBlade", category:"Honda", price:9200, specs:"450cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/EioUgiAZJp_zCAqP7nZbvtQ3cCbRj6RTAQ0GjuRJOy4tndqYQ7AChizngO5dnc7Ys4e0ACgNAKMMWuthYd_v1yib4i8YfZEpV_rA33lv7kOXzVaAOqSegXqMFvdy_UDC-Mb9qFxx1CFY39dHC12nRcfn04bvRR8XUOjjGYxLxEibX3hIIGyg6m2Sf7axDZgV?purpose=fullsize"},



{id:18, title:"Honda Shine", category:"Honda", price:9200, specs:"450cc inline-4 · Sport fairing", img:"https://images.openai.com/static-rsc-4/TB6TUa6kqAR9sg0Enh_DUrSOHUPZdqQRD_JjeLPax8WjkT4dMrPoTgMBjY3HekhMMz3MvEoRUFck1eXLFMpkJLdtq06m7PiM3jOSmmgEAZ8yWxiZPCU4r8WBmQcZn-NwQfjgIuIG80aIzSzlzKczGfjPoPbZ8hZuwD4Ar-OEiSMhH-fi6j6IupD0RlSLxJh-?purpose=fullsize"},




            //Bajaj Bikes



{id:19, title:" Bajaj Pulsar NS200", category:"Bajaj", price:2600, specs:"200cc · Perimeter frame · Sporty", img:"https://wallpapercave.com/wp/wp3921659.jpg"},



{id:19, title:" Bajaj Pulsar N250", category:"Bajaj", price:2600, specs:"250cc · Perimeter frame · Sporty", img:"https://wallpapercave.com/wp/wp10903307.jpg"},




{id:19, title:" Bajaj Pulsar F250", category:"Bajaj", price:2600, specs:"250cc · Perimeter frame · Sporty", img:"https://images.hindustantimes.com/auto/img/2025/01/04/960x540/Bajaj_Pulsar_F250_1635411689310_1735966952199.jpg"},





{id:19, title:" Bajaj Pulsar NS400Z", category:"Bajaj", price:2600, specs:"400cc · Perimeter frame · Sporty", img:"https://cdn-s3.autocarindia.com/Bajaj/Pulsar-NS400Z/Z62_4887.JPG?w=728&q=75"},




{id:19, title:" Bajaj Dominar 250", category:"Bajaj", price:2600, specs:"250cc · Perimeter frame · Sporty", img:"https://asset.autocarindia.com/static/image-galleries/images/20260219_100905_8ef523b2.jpg?w=728&q=75"},




{id:19, title:" Bajaj Dominar 400", category:"Bajaj", price:2600, specs:"400cc · Perimeter frame · Sporty", img:"https://images.tractorjunction.com/Bajaj_Dominar_400_1_dfd8bcb5a2.webp?format=webp&quality=40"},




{id:19, title:" Bajaj Avenger Street 160", category:"Bajaj", price:2600, specs:"160cc · Perimeter frame · Sporty", img:"https://wallpapercave.com/wp/wp3804357.jpg"},




{id:19, title:" Bajaj Avenger Cruise 220", category:"Bajaj", price:2600, specs:"220cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/FUSG1VCpkAkJxQVTzw4IMK3Tkq-WITrM_b8xb1QIriCIn3kXON2smKk5Rks7GmN5VTBCURWLv2lGGJ6K6kkBbBjrPiDEU2qD4D2xGIkq5bz81z8jaisfFksN-gPNXQcGAf9ZO54GtjZ5USA7YzUxRzHRbi_twG7SL1K0i6oVgLXf3wDTFlcjzkECB7Glz0y9?purpose=fullsize"},









  
{id:19, title:" Bajaj Platina 100", category:"Bajaj", price:2600, specs:"100cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/4KjSZTQpcoCZ4ZOzqTxw3ui0ffZOjEok4y5kwt-Mj8XDw5jKVJU_St7SphsdIXVqumoU7BOLUYhKm_0GXHUBPvox3Bpjvb4X2Mc1l2X1oJ7qThVMzvlxssMZ8OkpspAwcij2MhpJhZb32xy8Cm6o9jfLbDMfc8twcEOgSK_E5J8jUo-lt1LjV2hZUVetKy6N?purpose=fullsize"},






{id:19, title:" Bajaj Platina 110", category:"Bajaj", price:2600, specs:"110cc · Perimeter frame · Sporty", img:"https://images.timesdrive.in/photo/msid-151073157,thumbsize-0/151073157.jpg"},




{id:19, title:" Bajaj CT110X", category:"Bajaj", price:2600, specs:"110cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/7GdDi-fvbzsx8P9tthGyj356IOBQ58OtR5kE3eUeffQZJeqMPdFzgsEhKIbtq8fcytahB7vMYGbvIftdzL6poJVvRRnpu3qGKAp0IYBoUzZZhirMVkxIw_eEuxuxcDN3UMAe9n0tHeEqJWyXwD10gHw0_Ysp6o7G_Mj30Zp8CQPgwzC3tNOTDOxWqVOV-qsn?purpose=fullsize"},




{id:19, title:" Bajaj Pulsar 125", category:"Bajaj", price:2600, specs:"125cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/4YxXqwVskRof1M5RY84V0Da2CQVrPXKHRexSo4Ke3--kalfNSTAqbX0jIJdTfzB3YWtFSkCOXLLCwGyQgJXUDRneRFUK6KByXGZw8jD8nr9PGAK06WL_J3z_zbXPMtUI-2JkCXFQDsFQVOsjpxj3yMBWmy2RPTjDZAfzbKGiGpXrg5HVzgWsPFX_PoNG8_LL?purpose=fullsize"},




{id:19, title:" Bajaj Pulsar N125", category:"Bajaj", price:2600, specs:"125cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/4KjSZTQpcoCZ4ZOzqTxw3ui0ffZOjEok4y5kwt-Mj8XDw5jKVJU_St7SphsdIXVqumoU7BOLUYhKm_0GXHUBPvox3Bpjvb4X2Mc1l2X1oJ7qThVMzvlxssMZ8OkpspAwcij2MhpJhZb32xy8Cm6o9jfLbDMfc8twcEOgSK_E5J8jUo-lt1LjV2hZUVetKy6N?purpose=fullsize"},




{id:19, title:" Bajaj Pulsar NS125", category:"Bajaj", price:2600, specs:"125cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/0Z27be3wjBsc4o8_e_WFguaok3wy5AZXeLGI6rW1Hkcp3bZhdwZ0ty-npQ596bTvFhckHDWS23sklz5fO_aBpdVMD0p8eS0SPH1CEZn6i45Ddc_PJXZ0VnA28N6keA7imYdY8xwao1pzyU2p8zLWudcTgYseli3h6xfslAXXunuCQ0Q6VayhJ57mdmiYngPY?purpose=fullsize"},


{id:19, title:" Bajaj Pulsar N150", category:"Bajaj", price:2600, specs:"150cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/KlNlUDDTeWASvPiiSRZWOOu9wh2X_7Fvf6k-ahIpN8gAEaNyCiyPeLAwa5sri_TRQsl-vSQDELrmUSLqDZ6UWFNwQmPRbagUAdE4pp9M3bRgbKmmLNVZ0r_A3ka9PD1GD8PVRvoFD9y1naBfD6ynZeRo8eMwX6CVHr2irAdqce0atpCggHbJ4p0MCQMaVmai?purpose=fullsize"},





{id:19, title:" Bajaj Pulsar P150", category:"Bajaj", price:2600, specs:"150cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/YjLacW-37VGC6dEHU_D8GZxMgNGefQQDt1S8NSL5wQxftElr00kvRKkcP5YP2-z7KWssusujXs2XjcecejMvyFvnNmFOj2neChph8mWIgPUWsA4twGuXQ4EW14nZGwRJTaZ9D24i3iGZIEdlM6yBjKAKpZ96MhAFUQ0okeQFSNsRSaIcO1DK3BVSzlOYu3EE?purpose=fullsize"},


{id:19, title:" Bajaj Pulsar N160", category:"Bajaj", price:2600, specs:"160cc · Perimeter frame · Sporty", img:"https://wallpaperaccess.com/full/20047164.jpg"},





{id:19, title:" Bajaj Pulsar NS160", category:"Bajaj", price:2600, specs:"160cc · Perimeter frame · Sporty", img:"https://images.openai.com/static-rsc-4/mfwi7gKks48kQJ1Z_BcvvtUDdkFGkUyiD78nR-zir0JzwGG1wZrQ3cucQ1aR5pxDMe1AWObokbv5Auc8dsmDtKm_po232K4WlbWHsf1pFO9BeGdQ0XZ2bYkut-qH-3wK2fjh16TDqKVpaECnKtdtHirCKLfI_UYt_AWxlQXOapLBx5LUucuxCRayD-5zXHpK?purpose=fullsize"},





/*---- Royal Enfield Bikes ----*/

  {id:21, title:"Royal Enfield Classic 350", category:"Royal Enfield", price:4300, specs:"349cc thump · Retro styling", img:"https://images.unsplash.com/photo-1622185135505-2d795003994a?w=700&q=80"},

   {id:21, title:"Royal Enfield Super Meteor 650", category:"Royal Enfield", price:4300, specs:"650cc thump · Retro styling", img:"https://wallpaperaccess.com/full/23189321.jpg"},

 {id:21, title:"Royal Enfield Bear 650", category:"Royal Enfield", price:4400, specs:"650cc thump · Retro styling", img:"https://external-preview.redd.it/wonder-why-royal-enfield-is-calling-its-latest-the-bear-650-v0-c-s9JsPCOlY7A7Igq2tvltpkGxje83z0SkgExf-xYIM.jpg?auto=webp&s=d74e535c6756e1746c5f3535c26f96a3d0bfff94"},


  {id:21, title:"Royal Enfield Himalayan 450", category:"Royal Enfield", price:4500, specs:"450cc thump · Retro  styling", img:"https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2024/05/2024-royal-enfield-himalayan-450-official-teaser-1.jpeg?w=1600&h=900&fit=crop"},

  
  {id:22, title:"Royal Enfield Hunter 350", category:"Royal Enfield", price:5400, specs:"Single-cylinder, air–oil cooled J-series engine", img:"https://imgcdn.zigwheels.my/large/gallery/exterior/89/1881/royal-enfield-hunter-350-right-side-viewfull-image-390792.jpg"},


  /*---- Triumph Bikes ----*/

  {id:23, title:"Triumph Speed 400", category:"Triumph", price:5400, specs:"398cc single · Premium retro build", img:"https://d2lkn59rua3ry2.cloudfront.net/wp-content/uploads/2026/03/Triumph-Motorcycles-2.jpg"},


  {id:24, title:"Triumph Scrambler 400 X", category:"Triumph", price:11500, specs:"400cc triple · Naked street performance", img:"https://www.apex66.co.uk/wp-content/uploads/2025/07/Triumph-Scrambler-400X-06.jpg"},

  {id:24, title:"Triumph Speed Triple 1200 RS", category:"Triumph", price:11500, specs:"1200cc triple · Naked street performance", img:"https://w0.peakpx.com/wallpaper/914/45/HD-wallpaper-triumph-speed-triple-motorcycle-triumph.jpg"},

{id:24, title:"Triumph Bonneville T120", category:"Triumph", price:11500, specs:"900cc triple · Naked street performance", img:"https://i.pinimg.com/736x/b6/0f/83/b60f8357950b83960fe96f0d5e35c1bf.jpg"},

{id:24, title:"Triumph Bonneville T100", category:"Triumph", price:11500, specs:"900cc triple · Naked street performance", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNhlsEeqt_BAJdT__Foej0YUU-_VubXu8RUssuzoI-5QQvKUI7r0j2ogFX&s=10"},




{id:24, title:"Triumph Speed Twin 900", category:"Triumph", price:11500, specs:"900cc triple · Naked street performance", img:"https://images.openai.com/static-rsc-4/v3BHOCqjyiuIWG1orAfNEVPu0QbLiwTUImGeJomKSVGpae8h9nxt8tUdO7yq7BScas9hZIpkDuTuA2BJ4YGag-zt7dlj5J-GhCaACIy3BsLs64A7tjXjC2l68jdg8bAcNupfWgN4-Y6Q0PU1naCXUH1M9Fh-nVjbqiIubN4qOFbZo3cg3PaIRqDgYGUeOKET?purpose=fullsize"},


 {id:24, title:"Triumph Street Triple 765", category:"Triumph", price:11500, specs:"765cc triple · Naked street performance", img:"https://mir-s3-cdn-cf.behance.net/projects/404/fd77bc227089759.Y3JvcCw1MTEzLDQwMDAsNDQzLDA.jpg"},



 /*---- Benelli Bikes ----*/

  {id:25, title:"Benelli Leoncino 500", category:"Benelli", price:6700, specs:"500cc parallel-twin · Scrambler styling", img:"https://c.ndtvimg.com/2019-08/gch0vbr_benelli-leoncino-500-_625x300_05_August_19.jpg"},




{id:25, title:"Benelli 402S — 400cc", category:"Benelli", price:6700, specs:"400cc parallel-twin · Scrambler styling", img:"https://w0.peakpx.com/wallpaper/155/834/HD-wallpaper-benelli-tnt135-2018-bikes-darkness-superbikes-benelli.jpg"},



{id:25, title:"Benelli TRK 502X — 500cc", category:"Benelli", price:6700, specs:"500cc parallel-twin · Scrambler styling", img:"https://images.openai.com/static-rsc-4/9nmmu8hBP_6gxwcMHZfG8O22uOq5m1AOCnL8q9nn7VS7SM0gSR0fmRZTbGEbJMrPzTnZuAhN-f0Cy71zswQdC0PmeqpbVYBx8a04TpZag-FpTqFH5IPcIjz5Jw2ok6SYm5dP7R5-Y17LzXFFVXSA5Og-FWAC02RFeBYlmI_WDj01fVMXer9YYvJjrFqet5TF?purpose=fullsize"},



{id:25, title:"Benelli tnt 250cc", category:"Benelli", price:6700, specs:"250cc parallel-twin · Scrambler styling", img:"https://i0.wp.com/cdn.warungasep.net/2019/05/benelli-tnt-250-2019.jpg"},




{id:25, title:"Benelli TNT 600i — 600cc", category:"Benelli", price:6700, specs:"600cc parallel-twin · Scrambler styling", img:"https://i.pinimg.com/originals/c5/48/36/c54836dd0b4bb6a3e6a5110860e8ead9.jpg"},



{id:25, title:"Benelli TNT 300 — 300cc", category:"Benelli", price:6700, specs:"300cc parallel-twin · Scrambler styling", img:"https://www.bikesrepublic.com/wp-content/uploads/2016/02/Benelli-TNT-300-1.jpg"},



{id:25, title:"Benelli 302R — 300cc", category:"Benelli", price:6700, specs:"300cc parallel-twin · Scrambler styling", img:"https://images.openai.com/static-rsc-4/eGvvS9NdK5aO3L7JcO9TNDBDTsbUcMPSE2Kj8rpVp3hZAPwXGikvb3CovwHquZwR__sX8CApE7ySXXSEPfI1WfFpNWaLlGZhFmKUTCLYVyFEV1w8Px6iepMnZEbwQLef4TekJ6QH63RQDHlQ-FYGwbxO7KsF8Q999qrJH2DncXYWjxPkNjh3pKMH0cC5PpkO?purpose=fullsize"},




{id:25, title:"Benelli TNT 15 — 150cc", category:"Benelli", price:6700, specs:"150cc parallel-twin · Scrambler styling", img:"https://images.openai.com/static-rsc-4/TdzIWkgoLqRgKyJZindrXHhUfOPuRztcacvkzgfup6ebLDi16EvX7gPrdpy7SI7jdBq8-fFR7i-NhDx6FcY-sDwMmfMtvspwDvNgaV3Sf2f1U8eJSCRrqdImMImLfPX8mGyYyCcSF7Bou2_JE-DKAw1CnR3aaOFpyMBLDiw_to8wjOyzQw9M3P1BwZrkB84b?purpose=fullsize"},



  {id:26, title:"Benelli TRK 502X", category:"Benelli", price:7300, specs:"Adventure tourer · Spoked wheels", img:"https://images.openai.com/static-rsc-4/cMlxb2EYX0wBHyHK6MvJUICfVrk9-3NKyFwH-5OyyP7utRtl8WijwX9Gx5d00TTbbB1b1_kLMNFJllaIn3NQRTxk8r4krVjYQ0ZNiW2yNAokJpA8RdKfLE8vG0nklxo9zJg4ibeKI5gBn7up5uXmQVmw6T3M-IVIBnhTYKGmtO_l1mY8RiBk0wqnRWTYeJ7l?purpose=fullsize"},


/*---- Ducati Bikes ----*/

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



/*---- CFMOTO Bikes ----*/

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
