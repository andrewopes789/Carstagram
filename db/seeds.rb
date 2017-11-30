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
'fletcherjones', 'wisimonson', 'jimfalkbeverlyhills', 'ogaracoach',
'carlover123','carspotters', 'v12power', 'stancenation', 'turbocharged',
'supercars247', 'eurostance', 'amg_only', 'dupontregistry', 'theautocollection',
'mulliner', 'penske', 'montecitomotorcars', 'carspottingmonaco', 'platinumla',
'calabasaslm', '1oakmotors', 'rdbla']

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

all_photos = ['https://res.cloudinary.com/dn26kjpum/image/upload/v1511935203/h1drb5mpgsqv5irb6rns.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511906460/kmnpynzfmrm4bezk1rf1.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511887380/ktnei1ukvjvn3dtatwaw.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479712/Koenigsegg__Agera__One-1_at_Goodwood_2014_005_xgtwdv.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479711/1961_Aston_Martin_DB4_GT_Zagato_-_fvr_co20vi.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479708/Range_Rover_Velar_f4txmy.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479709/pexels-photo-434455_uyekrg.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479704/36902849424_57813a2c89_b_ppzhzn.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479358/adga_lkipor.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479144/pexels-photo_c1fiy3.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479143/BMW_Serie_6_rqqcte.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479004/hkbnk_ta4hcl.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511478893/6437529971_95a7bd9d6d_b_rm6ib5.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511478469/ferrari2_copy_g5nsmi.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479360/rolls1_d8ig1q.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479006/lambo1_vupwex.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479143/BMW_Concept_Vision_Efficient_Dynamics_Rear_zxsrxd.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479142/514733967_1280x720_leuuij.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479143/BMW_Serie_6_rqqcte.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479682/573581091_1280x720_mdx0y4.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479683/Aston_Martin_Vanquish__8186456260_dn4ong.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511479687/Aston_Martin_Vanquish_S_-_Flickr_-_Alexandre_Pre%CC%81vot__1_qm4hkb.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990923/pexels-photo-305070_cangxp.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990922/36902845414_e314eaefbf_b_eol7ky.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990923/6709291843_1e10b8cd67_b_lysrnm.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990922/bmw-918408_1280_1_ioxubx.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990923/Vehicle-Range-Rover-Range-Rover-Truck-Land-Car-2015696_ax2g2c.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990923/442840938_1280x720_mg8aa3.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990924/37581192422_8a5d09f552_b_xhkwhj.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990924/28853574286_1f46daf531_b_obcukl.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990923/37581177262_4812426979_b_mrnrg4.jpg',
'https://res.cloudinary.com/dn26kjpum/image/upload/v1511990925/range-rover-2245374_1280_dywkll.jpg'
]

all_photos.each do |photo|
  Photo.create!(
    img_url: photo,
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

# 500.times do
#   follower_id = user_ids.sample
#   following_id = user_ids.sample
#
#   until follower_id != following_id
#     following_id = user_ids.sample
#   end
#
#   Follow.create(
#     follower_id: follower_id,
#     following_id: following_id
#   )
# end
