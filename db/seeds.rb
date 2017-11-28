# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

User.create!(
  username: 'demo',
  email: 'demo@email.com',
  password: 'password',
  img_url: 'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_615/v1511644892/white_lshl6d.jpg'
)

usernames = ['musclecarzone', 'downtownlamotors', 'hypercarsworldwide', 'bespokecoachworks',
'fletcherjonesnewportbeach', 'wisimonson', 'jimfalkbeverlyhills', 'ogaracoach',
'carlover123','carspotters', 'v12power', 'stancenation', 'turbocharged',
'supercars247', 'eurostance', 'amg_only', 'dupontregistry', 'theautocollection',
'mulliner', 'penske', 'montecitomotorcars', 'carspottingmonaco', 'platinummotorsports',
'calabasasluxurymotorcars', '1ofakindmotors', 'rdbla']

usernames.length.times do
  user = usernames.pop
  User.create!(
    username: user,
    email: "info@#{user}.com",
    password: 'password',
    img_url: Faker::Company.logo
  )
end

user_ids = User.all.map(&:id)

Photo.delete_all

photos = ['http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511478893/1599px-Vision_Mercedes-Maybach_6_-_Mondial_de_l_Automobile_de_Paris_2016_-_001_idser3.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511478893/6437529971_95a7bd9d6d_b_rm6ib5.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511478894/Mercedes-Maybach_S_500_4MATIC__X_222____Frontansicht__14._September_2015__Mu%CC%88nster_lwkuhy.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479004/hkbnk_ta4hcl.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479005/knk_thzfmh.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479005/lambo1_copy_yi5lzu.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479006/lambo1_vupwex.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479143/BMW_Serie_6_rqqcte.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479144/pexels-photo_c1fiy3.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479143/pexels-photo-546795_tuqhev.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479142/BMWM3E36-001_xjzmbi.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479358/adga_lkipor.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479363/dgagadg_a1qryg.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479363/dagagag_o1ybqw.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479357/adgagag_nv64sr.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511478339/gadgad_ukhnng.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511478339/Silver_Bentley_Bentayga_2_bozodh.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479583/White_Maserati_MC12_by_Benoit_uidlxd.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479585/Maserati_Levante_S__01_wmqv0a.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479583/2009_Maserati_Quattroporte_Sport_GT_S_rugvko.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479583/White_Maserati_MC12_by_Benoit_uidlxd.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511478471/ferrari3_copy_vxbx2l.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511478469/ferrari2_copy_g5nsmi.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511478474/4_pos1uj.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479708/Range_Rover_Velar_f4txmy.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479710/pexels-photo-326383_aushkg.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479703/2017_Land_Rover_Discovery_HSE_TD6_Automatic_Front_mw62sq.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479704/472728039_1280x720_wt4nd6.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479707/McLaren_P1_in_Race_Mode__16765249335_xplgko.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479709/pexels-photo-434455_uyekrg.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479706/McLaren_675LT_afm0ds.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479683/Aston_Martin_Vanquish__8186456260_dn4ong.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479685/Aston_Martin_DBS_V12_coupe%CC%81__side__b-w_msxl9f.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479685/2012_Aston_Martin_Virage_coupe%CC%81__onyx_blk_fzmpoa.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479687/Aston_Martin_Vanquish_S_-_Flickr_-_Alexandre_Pre%CC%81vot__1_qm4hkb.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479695/Aston_Martin_Vanquish_and_Jaguar_XK_-_Flickr_-_exfordy_zagfqe.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479711/1961_Aston_Martin_DB4_GT_Zagato_-_fvr_co20vi.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479715/Aston_Martin_V12_Zagato__6146789519_yjrcfy.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479713/Red_Aston_Martin_V12_Zagato_fr_IAA_2011_arbesa.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479713/Aston_Martin_DB7_Zagato_-_Flickr_-_exfordy_cht2xz.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479689/445607859_1280x720_sbpkv9.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479688/2016-03-01_Geneva_Motor_Show_G070_swwpoa.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479694/Bugatti_Veyron_Super_Sport__5491917622_gxkbkj.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511475920/jaguar1_jjxqcr.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479683/ALFA-Stelvio_adsjnz.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479696/Alfa_Romeo_8C_Competizione_-_Flickr_-_exfordy_daio2b.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479683/Red_Alfa_Romeo_Giulietta_in_Krako%CC%81w__1_q2ulc5.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479682/573581091_1280x720_mdx0y4.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479708/Ferrari_P4-5_uhd29s.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479710/Geneva_MotorShow_2013_-_Pininfarina_Sergio_rear_view_uouswk.jpg',
'http://res.cloudinary.com/dn26kjpum/image/upload/c_scale,w_750/v1511479712/2006_Ferrari_P4-5_by_Pininfarina__19631298185_sv4u4d.jpg']

photos.length.times do
  Photo.create!(
    img_url: photos.pop,
    caption: Faker::Company.catch_phrase,
    author_id: user_ids.sample
  )
end

Like.delete_all

photo_ids = Photo.all.map(&:id)

500.times do
  Like.create(
    user_id: user_ids.sample,
    photo_id: photo_ids.sample
  )
end

Comment.delete_all

500.times do
  Comment.create(
    body: Faker::Company.catch_phrase,
    user_id: user_ids.sample,
    photo_id: photo_ids.sample
  )
end

Follow.delete_all

500.times do
  follower_id = user_ids.sample
  following_id = user_ids.sample

  until follower_id != following_id
    following_id = user_ids.sample
  end

  Follow.create(
    follower_id: follower_id,
    following_id: following_id
  )
end
