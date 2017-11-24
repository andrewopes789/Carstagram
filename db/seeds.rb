# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

user1 = User.create!(
  username: 'demo',
  email: 'demo@email.com',
  password: 'password'
)

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

Photo.delete_all

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465494/porsche5_uolupu.jpg',
  caption: 'Never out of place',
  author_id: user2.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465498/porsche9_thofiu.jpg',
  caption: 'Cayman S - perfect for those rainy day blues',
  author_id: user2.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465494/porsche3_fkzs34.jpg',
  caption: '911 Turbo S',
  author_id: user2.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465494/porsche2_pujsuq.jpg',
  caption: '991',
  author_id: user2.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465497/porsche8_dvmcey.jpg',
  caption: 'Last of the air-cooled',
  author_id: user2.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465496/porsche7_im7g6t.jpg',
  caption: 'Showstopper',
  author_id: user2.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465497/porsche6_anrlmu.jpg',
  caption: 'Compact in power, not in punch',
  author_id: user2.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465496/porsche4_ylg0mr.jpg',
  caption: 'Road warrior',
  author_id: user2.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466516/mercedes4_hrhdqc.jpg',
  caption: 'G63 AMG',
  author_id: user3.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466523/mercedes9_e3f8az.jpg',
  caption: 'Professional day-brightener',
  author_id: user3.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466511/mercedes5_axm6mh.jpg',
  caption: 'Position of authority',
  author_id: user3.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466510/mercedes7_lyrgbc.jpg',
  caption: 'Fashionably early #LondonFashionWeek',
  author_id: user3.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466511/mercedes3_l8oyxl.jpg',
  caption: '280 SL',
  author_id: user3.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466515/mercedes8_phccnx.jpg',
  caption: 'V8 BITURBO',
  author_id: user3.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466509/mercedes6_jrlh2r.jpg',
  caption: '300 SL',
  author_id: user3.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466507/mercedes2_rainax.jpg',
  caption: 'Modern classic',
  author_id: user3.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466512/mercedes1_zfwuas.jpg',
  caption: 'Pagoda',
  author_id: user3.id
)


Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478893/1599px-Vision_Mercedes-Maybach_6_-_Mondial_de_l_Automobile_de_Paris_2016_-_001_idser3.jpg',
  caption: 'Mercedes-Maybach Vision 6',
  author_id: user4.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478893/6437529971_95a7bd9d6d_b_rm6ib5.jpg',
  caption: '57s',
  author_id: user4.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478894/Mercedes-Maybach_S_500_4MATIC__X_222____Frontansicht__14._September_2015__Mu%CC%88nster_lwkuhy.jpg',
  caption: 'S500 MAYBACH',
  author_id: user4.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479004/hkbnk_ta4hcl.jpg',
  caption: 'Crowd pleaser',
  author_id: user5.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479005/knk_thzfmh.jpg',
  caption: 'Huracan',
  author_id: user5.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479005/lambo1_copy_yi5lzu.jpg',
  caption: 'Aventador',
  author_id: user5.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479006/lambo1_vupwex.jpg',
  caption: 'Menacing',
  author_id: user5.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479143/BMW_Serie_6_rqqcte.jpg',
  caption: '6 Series INDIVIDUAL',
  author_id: user6.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479144/pexels-photo_c1fiy3.jpg',
  caption: 'M4',
  author_id: user6.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479143/pexels-photo-546795_tuqhev.jpg',
  caption: 'Adventure Awaits',
  author_id: user6.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479142/BMWM3E36-001_xjzmbi.jpg',
  caption: 'Instant classic',
  author_id: user6.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479358/adga_lkipor.jpg',
  caption: 'A Ghostly Presence',
  author_id: user7.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479363/dgagadg_a1qryg.jpg',
  caption: 'Phantom Drophead',
  author_id: user7.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479363/dagagag_o1ybqw.jpg',
  caption: 'Ghost Series II',
  author_id: user7.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479357/adgagag_nv64sr.jpg',
  caption: 'Your chariot awaits.',
  author_id: user7.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478339/gadgad_ukhnng.jpg',
  caption: 'Arnage Final Series',
  author_id: user8.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478339/Silver_Bentley_Bentayga_2_bozodh.jpg',
  caption: 'Bentayga',
  author_id: user8.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475840/bentley1_frexsz.jpg',
  caption: 'Continental GT',
  author_id: user8.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479583/White_Maserati_MC12_by_Benoit_uidlxd.jpg',
  caption: 'MC 12',
  author_id: user9.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479585/Maserati_Levante_S__01_wmqv0a.jpg',
  caption: 'Levante S',
  author_id: user9.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479583/2009_Maserati_Quattroporte_Sport_GT_S_rugvko.jpg',
  caption: 'Quattroporte Sport GTS',
  author_id: user9.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479692/Audi_S6_Avant__8649126522_l02r02.jpg',
  caption: 'S6 AVANT',
  author_id: user10.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479691/Audi_Q5_2.0_TDI_quattro_S-line__Facelift____Frontansicht__23._September_2012__Hilden_ecyeba.jpg',
  caption: 'Q5 TDI',
  author_id: user10.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479685/audi-sports-car-r8-marlene_bdm2uv.jpg',
  caption: 'R8 V10',
  author_id: user10.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511466515/mercedes8_phccnx.jpg',
  caption: 'V8 BITURBO',
  author_id: user10.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479583/White_Maserati_MC12_by_Benoit_uidlxd.jpg',
  caption: 'Maserati MC12',
  author_id: user11.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479685/audi-sports-car-r8-marlene_bdm2uv.jpg',
  caption: 'R8 V10',
  author_id: user11.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511465494/porsche3_fkzs34.jpg',
  caption: '911 Turbo S',
  author_id: user11.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475477/ferrari3_bvtzmx.jpg',
  caption: 'California in need of a wash',
  author_id: user11.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475477/ferrari3_bvtzmx.jpg',
  caption: 'All-terrain vehicle',
  author_id: user12.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475476/ferrari2_cwvli3.jpg',
  caption: 'Heart and soul',
  author_id: user12.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475477/ferrari1_jae7yn.jpg',
  caption: 'Stopping power',
  author_id: user12.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478471/ferrari3_copy_vxbx2l.jpg',
  caption: 'F40',
  author_id: user12.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478469/ferrari2_copy_g5nsmi.jpg',
  caption: '458 LIBERTYWALK',
  author_id: user12.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511478474/4_pos1uj.jpg',
  caption: 'LaFerrari',
  author_id: user12.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479708/Range_Rover_Velar_f4txmy.jpg',
  caption: 'Velar',
  author_id: user13.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479710/pexels-photo-326383_aushkg.jpg',
  caption: 'VOGUE Supercharged',
  author_id: user13.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479703/2017_Land_Rover_Discovery_HSE_TD6_Automatic_Front_mw62sq.jpg',
  caption: 'DISCOVERY',
  author_id: user13.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479704/472728039_1280x720_wt4nd6.jpg',
  caption: 'SPORT',
  author_id: user13.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479707/McLaren_P1_in_Race_Mode__16765249335_xplgko.jpg',
  caption: 'P1 in RACE MODE',
  author_id: user14.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479709/pexels-photo-434455_uyekrg.jpg',
  caption: 'Orange Blossom',
  author_id: user14.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479706/McLaren_675LT_afm0ds.jpg',
  caption: '675LT',
  author_id: user14.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479683/Aston_Martin_Vanquish__8186456260_dn4ong.jpg',
  caption: 'Modern iteration',
  author_id: user15.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479685/Aston_Martin_DBS_V12_coupe%CC%81__side__b-w_msxl9f.jpg',
  caption: 'DBS V12',
  author_id: user15.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479685/2012_Aston_Martin_Virage_coupe%CC%81__onyx_blk_fzmpoa.jpg',
  caption: 'Virage',
  author_id: user15.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479687/Aston_Martin_Vanquish_S_-_Flickr_-_Alexandre_Pre%CC%81vot__1_qm4hkb.jpg',
  caption: 'Vanquish S',
  author_id: user15.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479695/Aston_Martin_Vanquish_and_Jaguar_XK_-_Flickr_-_exfordy_zagfqe.jpg',
  caption: 'British Muscle',
  author_id: user15.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479711/1961_Aston_Martin_DB4_GT_Zagato_-_fvr_co20vi.jpg',
  caption: 'DB4 GT by ZAGATO',
  author_id: user16.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479715/Aston_Martin_V12_Zagato__6146789519_yjrcfy.jpg',
  caption: 'ASTON MARTIN V12 by ZAGATO',
  author_id: user16.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479713/Red_Aston_Martin_V12_Zagato_fr_IAA_2011_arbesa.jpg',
  caption: 'ASTON MARTIN V12 by ZAGATO',
  author_id: user16.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479713/Aston_Martin_DB7_Zagato_-_Flickr_-_exfordy_cht2xz.jpg',
  caption: 'DB7 by ZAGATO',
  author_id: user16.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479689/445607859_1280x720_sbpkv9.jpg',
  caption: 'VEYRON',
  author_id: user17.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479688/2016-03-01_Geneva_Motor_Show_G070_swwpoa.jpg',
  caption: 'CHIRON',
  author_id: user17.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479694/Bugatti_Veyron_Super_Sport__5491917622_gxkbkj.jpg',
  caption: 'SUPERSPORT',
  author_id: user17.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475927/jaguar3_qsv8jn.jpg',
  caption: 'Vanden Plas',
  author_id: user18.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479696/sports_car_automobile_vehicle_transportation_speed_design_luxury_coupe-1410396_sz7aic.jpg',
  caption: 'XK',
  author_id: user18.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479703/jaguar5_kfllga.jpg',
  caption: 'Ready',
  author_id: user18.id
)
Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511475920/jaguar1_jjxqcr.jpg',
  caption: 'Restoration Hardware',
  author_id: user18.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479689/470600804_1280x720_uufghh.jpg',
  caption: 'Knight of the Night',
  author_id: user18.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479683/ALFA-Stelvio_adsjnz.jpg',
  caption: 'Stelvio Quadrifoglio',
  author_id: user19.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479696/Alfa_Romeo_8C_Competizione_-_Flickr_-_exfordy_daio2b.jpg',
  caption: '8C Competizione',
  author_id: user19.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479683/Red_Alfa_Romeo_Giulietta_in_Krako%CC%81w__1_q2ulc5.jpg',
  caption: 'Giulietta',
  author_id: user19.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479682/573581091_1280x720_mdx0y4.jpg',
  caption: 'Track ready wherever you are',
  author_id: user19.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479708/Ferrari_P4-5_uhd29s.jpg',
  caption: 'P4-5',
  author_id: user20.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479710/Geneva_MotorShow_2013_-_Pininfarina_Sergio_rear_view_uouswk.jpg',
  caption: 'Sergio',
  author_id: user20.id
)

Photo.create!(
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511479712/2006_Ferrari_P4-5_by_Pininfarina__19631298185_sv4u4d.jpg',
  caption: 'By Pininfarina',
  author_id: user20.id
)
