user2 = User.create!(
  username: 'porsche',
  email: 'info@porsche.com',
  password: 'password'
)

user3 = User.create!(
  username: 'mbusa',
  email: 'info@mbusa.com',
  password: 'password'
)

user4 = User.create!(
  username: 'Maybach',
  email: 'info@maybach.com',
  password: 'password'
)

user5 = User.create!(
  username: 'lamborghini',
  email: 'info@lamborghini.com',
  password: 'password'
)

user6 = User.create!(
  username: 'bmw',
  email: 'info@bmw.com',
  password: 'password'
)

user7 = User.create!(
  username: 'rollsroycemotorcars',
  email: 'info@rollsroyce.com',
  password: 'password'
)

user8 = User.create!(
  username: 'bentleymotors',
  email: 'info@bentley.com',
  password: 'password'
)

user9 = User.create!(
  username: 'maserati',
  email: 'info@maserati.com',
  password: 'password'
)

user10 = User.create!(
  username: 'audi',
  email: 'info@audi.com',
  password: 'password'
)

user11 = User.create!(
  username: 'supercarsworldwide',
  email: 'info@supercarsworldwide.com',
  password: 'password'
)

user12 = User.create!(
  username: 'ferrari',
  email: 'info@ferrari.com',
  password: 'password'
)

user13 = User.create!(
  username: 'landroverusa',
  email: 'info@landrover.com',
  password: 'password'
)

user14 = User.create!(
  username: 'mclaren',
  email: 'info@mclaren.com',
  password: 'password'
)

user15 = User.create!(
  username: 'astonmartin',
  email: 'info@astonmartin.com',
  password: 'password'
)

user16 = User.create!(
  username: 'zagato',
  email: 'info@zagato.com',
  password: 'password'
)

user17 = User.create!(
  username: 'bugatti',
  email: 'info@bugatti.com',
  password: 'password'
)

user18 = User.create!(
  username: 'koenigsegg',
  email: 'info@koenigsegg.com',
  password: 'password'
)

user19 = User.create!(
  username: 'alfaromeo',
  email: 'info@alfaromeo.com',
  password: 'password'
)

user20 = User.create!(
  username: 'pininfarina',
  email: 'info@pininfarina.com',
  password: 'password'
)

photo1 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465494/porsche5_uolupu.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user2.id
)

photo2 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465498/porsche9_thofiu.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user2.id
)

photo3 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465494/porsche3_fkzs34.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user2.id
)

photo4 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465494/porsche2_pujsuq.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user2.id
)

photo5 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465497/porsche8_dvmcey.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user2.id
)

photo6 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465496/porsche7_im7g6t.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user2.id
)

photo7 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465497/porsche6_anrlmu.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user2.id
)

photo8 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465496/porsche4_ylg0mr.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user2.id
)

photo9 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466516/mercedes4_hrhdqc.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)

photo10 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466523/mercedes9_e3f8az.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)

photo11 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466511/mercedes5_axm6mh.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)

photo12 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466510/mercedes7_lyrgbc.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)

photo13 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466511/mercedes3_l8oyxl.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)

photo14 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466515/mercedes8_phccnx.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)

photo15 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466509/mercedes6_jrlh2r.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)

photo16 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466507/mercedes2_rainax.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)

photo17 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466512/mercedes1_zfwuas.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user3.id
)


photo18 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478893/1599px-Vision_Mercedes-Maybach_6_-_Mondial_de_l_Automobile_de_Paris_2016_-_001_idser3.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user4.id
)

photo19 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478893/6437529971_95a7bd9d6d_b_rm6ib5.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user4.id
)

photo20 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478894/Mercedes-Maybach_S_500_4MATIC__X_222____Frontansicht__14._September_2015__Mu%CC%88nster_lwkuhy.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user4.id
)

photo21 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479004/hkbnk_ta4hcl.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user5.id
)

photo22 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479005/knk_thzfmh.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user5.id
)

photo23 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479005/lambo1_copy_yi5lzu.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user5.id
)

photo24 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479006/lambo1_vupwex.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user5.id
)

photo25 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479143/BMW_Serie_6_rqqcte.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user6.id
)

photo26 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479144/pexels-photo_c1fiy3.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user6.id
)

photo27 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479143/pexels-photo-546795_tuqhev.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user6.id
)

photo28 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479142/BMWM3E36-001_xjzmbi.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user6.id
)

photo29 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479358/adga_lkipor.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user7.id
)

photo30 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479363/dgagadg_a1qryg.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user7.id
)

photo31 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479363/dagagag_o1ybqw.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user7.id
)

photo32 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479357/adgagag_nv64sr.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user7.id
)

photo33 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478339/gadgad_ukhnng.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user8.id
)

photo34 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478339/Silver_Bentley_Bentayga_2_bozodh.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user8.id
)

photo35 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475840/bentley1_frexsz.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user8.id
)

photo36 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479583/White_Maserati_MC12_by_Benoit_uidlxd.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user9.id
)

photo37 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479585/Maserati_Levante_S__01_wmqv0a.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user9.id
)

photo38 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479583/2009_Maserati_Quattroporte_Sport_GT_S_rugvko.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user9.id
)

photo39 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479692/Audi_S6_Avant__8649126522_l02r02.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user10.id
)

photo40 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479691/Audi_Q5_2.0_TDI_quattro_S-line__Facelift____Frontansicht__23._September_2012__Hilden_ecyeba.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user10.id
)

photo41 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479685/audi-sports-car-r8-marlene_bdm2uv.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user10.id
)

photo42 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466515/mercedes8_phccnx.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user10.id
)

photo43 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479583/White_Maserati_MC12_by_Benoit_uidlxd.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user11.id
)

photo44 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479685/audi-sports-car-r8-marlene_bdm2uv.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user11.id
)

photo45 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465494/porsche3_fkzs34.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user11.id
)

photo46 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475477/ferrari3_bvtzmx.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user11.id
)

photo47 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475477/ferrari3_bvtzmx.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user12.id
)

photo48 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475476/ferrari2_cwvli3.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user12.id
)

photo49 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475477/ferrari1_jae7yn.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user12.id
)

photo50 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478471/ferrari3_copy_vxbx2l.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user12.id
)

photo51 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478469/ferrari2_copy_g5nsmi.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user12.id
)

photo55 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478474/4_pos1uj.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user12.id
)

photo56 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479708/Range_Rover_Velar_f4txmy.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user13.id
)

photo57 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479710/pexels-photo-326383_aushkg.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user13.id
)

photo58 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479703/2017_Land_Rover_Discovery_HSE_TD6_Automatic_Front_mw62sq.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user13.id
)

photo59 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479704/472728039_1280x720_wt4nd6.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user13.id
)

photo60 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479707/McLaren_P1_in_Race_Mode__16765249335_xplgko.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user14.id
)

photo61 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479709/pexels-photo-434455_uyekrg.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user14.id
)

photo62 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479706/McLaren_675LT_afm0ds.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user14.id
)

photo63 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479683/Aston_Martin_Vanquish__8186456260_dn4ong.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user15.id
)

photo64 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479685/Aston_Martin_DBS_V12_coupe%CC%81__side__b-w_msxl9f.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user15.id
)

photo65 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479685/2012_Aston_Martin_Virage_coupe%CC%81__onyx_blk_fzmpoa.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user15.id
)

photo66 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479687/Aston_Martin_Vanquish_S_-_Flickr_-_Alexandre_Pre%CC%81vot__1_qm4hkb.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user15.id
)

photo67 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479695/Aston_Martin_Vanquish_and_Jaguar_XK_-_Flickr_-_exfordy_zagfqe.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user15.id
)

photo68 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479711/1961_Aston_Martin_DB4_GT_Zagato_-_fvr_co20vi.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user16.id
)

photo69 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479715/Aston_Martin_V12_Zagato__6146789519_yjrcfy.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user16.id
)

photo70 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479713/Red_Aston_Martin_V12_Zagato_fr_IAA_2011_arbesa.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user16.id
)

photo71 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479713/Aston_Martin_DB7_Zagato_-_Flickr_-_exfordy_cht2xz.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user16.id
)

photo72 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479689/445607859_1280x720_sbpkv9.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user17.id
)

photo73 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479688/2016-03-01_Geneva_Motor_Show_G070_swwpoa.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user17.id
)

photo74 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479694/Bugatti_Veyron_Super_Sport__5491917622_gxkbkj.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user17.id
)

photo75 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475927/jaguar3_qsv8jn.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user18.id
)

photo76 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479696/sports_car_automobile_vehicle_transportation_speed_design_luxury_coupe-1410396_sz7aic.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user18.id
)

photo77 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479703/jaguar5_kfllga.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user18.id
)
photo78 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475920/jaguar1_jjxqcr.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user18.id
)

photo79 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479689/470600804_1280x720_uufghh.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user18.id
)

photo80 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479683/ALFA-Stelvio_adsjnz.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user19.id
)

photo81 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479696/Alfa_Romeo_8C_Competizione_-_Flickr_-_exfordy_daio2b.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user19.id
)

photo82 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479683/Red_Alfa_Romeo_Giulietta_in_Krako%CC%81w__1_q2ulc5.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user19.id
)

photo83 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479682/573581091_1280x720_mdx0y4.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user19.id
)

photo84 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479708/Ferrari_P4-5_uhd29s.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user20.id
)

photo85 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479710/Geneva_MotorShow_2013_-_Pininfarina_Sergio_rear_view_uouswk.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user20.id
)

photo86 = Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479712/2006_Ferrari_P4-5_by_Pininfarina__19631298185_sv4u4d.jpg',
  caption: Faker::Company.catch_phrase,
  author_id: user20.id
)
