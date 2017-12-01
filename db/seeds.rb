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

usernames = ['rusnakautogroup', 'fletcherjones', 'wisimonson', 'jimfalkbeverlyhills',
'ogaracoach', 'cncmotors', 'indigoautogroup', 'robbreport', 'rdbla',
'bwrentacar', 'theautogallery','deserteuropeanmotors', 'penske',
'montecitomotorcars', 'platinummotorsport', 'calabasaslm', 'galpinmotors',
'keyeseuropean', 'hornburggroup', 'phillipsauto']

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

all_photos = [
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479712/Koenigsegg__Agera__One-1_at_Goodwood_2014_005_xgtwdv.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479711/1961_Aston_Martin_DB4_GT_Zagato_-_fvr_co20vi.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479704/36902849424_57813a2c89_b_ppzhzn.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479144/pexels-photo_c1fiy3.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479360/rolls1_d8ig1q.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479006/lambo1_vupwex.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990923/pexels-photo-305070_cangxp.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990922/36902845414_e314eaefbf_b_eol7ky.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990924/37581192422_8a5d09f552_b_xhkwhj.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990924/28853574286_1f46daf531_b_obcukl.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990923/37581177262_4812426979_b_mrnrg4.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990925/range-rover-2245374_1280_dywkll.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990923/auto_detail_the_suitcase_light_colors_blue_red_museum-670976_vgtpr4.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512085450/2008_Spyker_C8_Laviolette_-_Flickr_-_The_Car_Spy__2_fue28z.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512085450/auto-2863638_1280_pbpm8y.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512085524/lamborghini-2975652_1280_rlcw5d.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512085523/bmw-2970885_1280_ndywis.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512085523/bentley-2976046_1280_qpvhsm.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512085523/supercar-2975657_1280_hktjtq.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512085523/steering-wheel-2943929_1280_iu0k5p.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086235/dashboard-2934067_1280_fo9pgl.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086235/supercar-2932191_1280_xgatuu.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086235/steering-wheel-2927406_1280_zl93du.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086235/ferrari-2932197_1280_rjmkdg.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086235/ferrari-2934066_1280_wl8znl.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086235/bmw-2963683_1280_fnurss.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086249/ferrari-2812936_1280_fwwbdl.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086249/car-2854661_1280_zwxz6m.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086248/car-2918112_1280_gnxf06.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086248/steering-wheel-2902706_1280_pf9dhq.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512086249/speed-2747342_1280_lnwiev.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512087031/wheel-2943925_1280_nrhaha.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512087031/wheel-2943922_1280_chwmrf.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512087031/porsche-2105408_1280_lipfs1.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512087032/bmw-2970882_1280_fjqhnr.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512087031/ferrari-2918113_1280_dentta.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512087033/alloy-wheel-2417026_1280_e4a92k.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512087033/automotive-1881498_1280_rzqkqa.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512087036/lamborghini-2943829_1280_fouzre.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512088979/2018-Rolls-Royce-Phantom-VIII-Extended-Wheelbase-front-three-quarter-in-motion-04_xxx1i5.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512088980/2018-Rolls-Royce-Phantom-VIII-rear-three-quarter-in-motion-02_ymddk7.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512088976/rolls-royce-dawn-black-badge-2_nhqe9s.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512088977/badge_3_ulaudj.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098806/2017_rolls-royce_phantom-drophead-coupe_convertible_base_fq_oem_1_1280_a8mccx.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098806/AR-301239821_lihjgl.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098807/Maybach-57-RA-Bridge-1024x768_gjjns0.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098807/bentley-flying-spur-w12-sjpg_oavn0o.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098807/2017_bentley_bentayga_LIFE1_ot_1104161_1280_xvdhmq.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098808/la-fi-hy-rolls-royce-dawn-20160429_rwhgl6.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098808/black-badge-rolls-royce-wraith-02_xxlo7e.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098808/2016-mercedes-maybach-s600-front-three-quarter-in-motion-02_e4yaty.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098809/74255_2016_mercedesbenz_Maybach_lblo0f.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098810/1634657725001_4463809188001_B-Makingofcelestial-02-fullbleed-v1_zc3bop.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098810/2015-Bentley-Mulsanne-Speed-2016-Mercedes-Maybach-S600-front-end-05_a8v1xu.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098811/Rolls-Royce-Phantom-Series-II-33_mwoof3.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098811/2016-Bentley-Continental-GT-Speed-coupe-front-three-quarters-in-motion-03_yipr7z.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098811/Bentley-Bentayga-Mulliner-1-BENTLEY0716_xcx02t.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098813/porscheboxsterspyder01_clalck.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098813/mercedes-benz-s-class-first-drive-hero_jfbbtu.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098813/rolls-royce-dawn-3_0_yewr32.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098843/Bentley-Flying-Spur-5_kwrxdk.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1512098840/crenshaw-selects-36jpg_emytdt.jpg'
]

all_photos.each do |photo|
  Photo.create!(
    img_url: photo,
    caption: 'An example of our finest offerings',
    author_id: user_ids.sample
  )
end

Like.delete_all

photo_ids = Photo.all.map(&:id)

1000.times do
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
