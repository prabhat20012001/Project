// Data
import {
  issueAnxiety,
  issueAdhd,
  issueBiopolarDisorder,
  issueCd,
  issueDepression,
  issueEatingDisorder,
  issueOcd,
  issueOdd,
  issuePanicAttack,
  issueParanoia,
  issueSchizophrenia,
  issueStress,
  meditationHeader,
  meditationType1,
  meditationType2,
  meditationType3,
  meditationType4,
  meditationType5,
  meditationType6,
  activityBlogThumbnail,
  sadhnaHeader,
  sadhnaBhakti,
  sadhnaJapa,
  sadhnaKundalini,
  sadhnaMantra,
  sadhnaMeditation,
  sadhnaNature,
  sadhnaSeva,
  sadhnaTantric,
  sadhnaYoga,
  yogaHeader,
  yogaAdhoMukhaSavanasana,
  yogaMatsyasana,
  yogaSarvangasana,
  yogaBandhasana,
  yogaSirsasana,
  yogaTrikonasana,
  yogaUstrasana,
  yogaVirbhadrasana,
  yogaVrksasna,
  brainExerciseHeader,
  brainGameGalaxy,
  brainGameTreasure,
  brainGameHunter,
  feature1,
  feature2,
  feature3,
  blogThumbnail1,
  blogThumbnail2,
  blogThumbnail3,
  blogThumbnail4,
  blogThumbnail5,
  blogThumbnail6,
  adhvmukhaHeader,
  adhvmukhaSteps,
  adhvVariationOne,
  adhvVariationTwo,
  adhvVariationThree,
} from "../assets";

// Components
import HeaderWithImage from "../components/HeaderWithImage";
import RightImage from "../components/RightImage";
import LeftImage from "../components/LeftImage";
import LeftVideoList from "../components/LeftVideoList";
import RightImageList from "../components/RightImageList";
// import YogaLeftList from "../components/YogaLeftList";
// import YogaRightList from "../components/YogaRightList";
// import ActivityBlogs from "../components/ActivityBlogs";

// Issues data for landing page
export const issues = [
  {
    name: "Anxiety",
    image: issueAnxiety,
  },
  {
    name: "ADHD",
    image: issueAdhd,
  },
  {
    name: "Bio polar disorder",
    image: issueBiopolarDisorder,
  },
  {
    name: "CD",
    image: issueCd,
  },
  {
    name: "Depression",
    image: issueDepression,
  },
  {
    name: "Eating Disorder",
    image: issueEatingDisorder,
  },
  {
    name: "OCD",
    image: issueOcd,
  },
  {
    name: "ODD",
    image: issueOdd,
  },
  {
    name: "Panic Attack",
    image: issuePanicAttack,
  },
  {
    name: "Paranoia",
    image: issueParanoia,
  },
  {
    name: "Schizophrenia",
    image: issueSchizophrenia,
  },
  {
    name: "Stress",
    image: issueStress,
  },
];

// Meditation Types for meditation page
export const meditationTypes = [
  {
    image: meditationType1,
    title: "Mindfulness Meditation",
    desc: "Originated from Hindu shastras, a practise involving attention to present,focusing on breath and thoughts without judgment fostering heightened awareness, acceptance.",
  },
  {
    image: meditationType2,
    title: "Breath Awareness Meditation",
    desc: "Observing the natural rhythm of breath, Close attention to inhalation and exhalation, redirecting the mind back to the breath. Calms mind, enhances focus, and reduces anxiety.",
  },
  {
    image: meditationType3,
    title: "Kundalini Meditation",
    desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to  Balance the chakras and achieve heightened spiritual awakening.",
  },
  {
    image: meditationType4,
    title: "Zen Meditation (Zazen)",
    desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath observing thoughts and sensations without attachment or judgment. Cultivate mindfulness, into true reality.",
  },
  {
    image: meditationType5,
    title: "Spiritual meditation",
    desc: "Activating one's consciousness. Spiritual meditation involves bonding at a higher consciencel. Highly beneficial to those seeking spiritual growth and oneness with supreme self.",
  },
  {
    image: meditationType6,
    title: "Walking Meditation",
    desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
  },
];

// All activities data for activities subpages
export const activities = [
  {
    id: 1,
    name: "Yoga",
    slug: "/activities/yoga",
    header: {
      title: [
        {
          color: false,
          text: "Exploring Mind Harmony through ",
        },
        {
          color: true,
          text: "Yoga",
        },
      ],
      desc: [
        {
          color: true,
          text: "Connecting Body, Breath, and Soul ",
        },
        {
          color: true,
          text: "for InnerPeace ",
        },
        {
          color: false,
          text: "from within with meditation",
        },
      ],
      image: yogaHeader,
    },
    activities: {
      title: "Yoga Techniques",
      desc: "Let's embark on a journey to explore various types of yoga poses, guiding us toward inner harmony.",
      types: [
        {
          title: "Adho Mukha Svanasana",
          thumbnail: yogaAdhoMukhaSavanasana,
          desc: "Adho Mukha Svanasana is a foundational yoga pose that profoundly benefits the body and mind. It is a beautiful combination of strength, flexibility, and relaxation.",
          slug: "/activities/yoga/adho-mukha-svanasana",
          sections: [
            {
              component: HeaderWithImage,
              data: {
                title: "Adho Mukha Svanasana",
                desc: "Adho Mukha Svanasana, also known as Downward-Facing Dog Pose, is one of the most recognizable yoga postures. This pose is a great way to stretch your hamstrings, calves, and spine and strengthen your arms, shoulders, and legs. It can also help calm your mind and reduce stress. In this article, we will explore the benefits, techniques, and variations of Adho Mukha Svanasana.",
                image: adhvmukhaHeader,
                var: "There are several variations of Adho Mukha Svanasana that you can try depending on your skill level and flexibility. Here are a few:",
              },
            },
            {
              component: RightImage,
              data: {
                title: "Dolphin Pose: ",
                desc: "This variation is similar to Adho Mukha Svanasana, but instead of straightening your arms, you bend your elbows and rest your forearms on the ground. This pose is excellent for strengthening the shoulders and upper back.",
                image: adhvVariationOne,
              },
            },
            {
              component: LeftImage,
              data: {
                title: "Three-Legged Dog Pose: ",
                desc: "To practice this variation, start in Adho Mukha Svanasana and lift one leg towards the ceiling. Hold for a few breaths, then switch sides. This pose helps build strength in the legs and core.",
                image: adhvVariationTwo,
              },
            },
            {
              component: RightImage,
              data: {
                title: "Puppy Pose: ",
                desc: "This variation is a gentle shoulder and spine stretch. Start on your hands and knees, then walk your hands forward as you lower your chest toward the ground. Keep your hips above your knees and your arms extended in front of you.",
                image: adhvVariationThree,
              },
            },
            {
              component: LeftVideoList,
              data: {
                title: "Steps of Adho Mukha Svanasana: ",
                desc: "To practice Adho Mukha Svanasana, follow these steps: ",
                videoUrl: "https://www.youtube.com/embed/cCEK6XrcUx0",
                list: [
                  {
                    subtitle: "",
                    desc: "Start on your hands and knees with your wrists under your shoulders and your knees under your hips. Spread your fingers wide and press firmly into the palms of your hands.",
                  },
                  {
                    subtitle: "",
                    desc: "Inhale and tuck your toes under, lifting your knees off the ground. Exhale and lift your hips up and back, straightening your arms and legs",
                  },
                  {
                    subtitle: "",
                    desc: "Keep your hands shoulder-width apart and your feet hip-width apart. Press your heels down towards the ground and lengthen your spine.",
                  },
                  {
                    subtitle: "",
                    desc: "Relax your head and neck and gaze towards your belly button.",
                  },
                  {
                    subtitle: "",
                    desc: "Hold the pose for 5-10 deep breaths, then exhale and release back to the starting position.",
                  },
                ],
              },
            },
            {
              component: RightImageList,
              data: {
                title: "Benefits of Adho Mukha Svanasana: ",
                desc: "There are numerous benefits to practicing Adho Mukha Svanasana, including:",
                list: [
                  {
                    subtitle: "Increases flexibility: ",
                    desc: "This pose stretches the hamstrings, calves, and spine, which can help increase flexibility in these areas.",
                  },
                  {
                    subtitle: "Strengthens the upper body: ",
                    desc: "Adho Mukha Svanasana is an excellent pose for strengthening the arms, shoulders, and upper back.",
                  },
                  {
                    subtitle: "Relieves stress: ",
                    desc: "This pose can help calm the mind and reduce stress and anxiety.",
                  },
                  {
                    subtitle: "Improves digestion: ",
                    desc: "The inversion of the pose can help improve digestion and relieve constipation.",
                  },
                  {
                    subtitle: "Energizes the body: ",
                    desc: "Adho Mukha Svanasana can help boost energy levels by increasing blood flow to the brain.",
                  },
                ],
              },
            },
          ],
        },
        {
          title: "Virabhadrasana II",
          thumbnail: yogaVirbhadrasana,
          desc: "Virabhadrasana emanates strength and grace. This yoga asana cultivates stability, balance, and a sense of inner courage, making it a powerful addition to any yoga sequence.",
          slug: "/activities/yoga/virabhadrasana",
        },
        {
          title: "Trikonasana",
          thumbnail: yogaTrikonasana,
          desc: "Trikonasana is a radiant and dynamic yoga posture that stretches and opens the entire body. With its triangular shape, this asana offers a blend of strength, expansion, and tranquility",
          slug: "/activities/yoga/trikonasana",
        },
        {
          title: "Vrksasna",
          thumbnail: yogaVrksasna,
          desc: "Vrksasana embodies the essence of balance and rootlessness in yoga. This graceful and standing posture cultivates stability, concentration, and a profound connection with nature.",
          slug: "/activities/yoga/vrksasna",
        },
        {
          title: "Ustrasana",
          thumbnail: yogaUstrasana,
          desc: "Ustrasana opens the heart center and stimulates the entire front body, offering a profound stretch and release. This bring a sense of liberation & vulnerability, to embrace courage. ",
          slug: "/activities/yoga/ustrasana",
        },
        {
          title: "Matsyasana",
          thumbnail: yogaMatsyasana,
          desc: "Matsyasana gracefully arches the back and opens the chest, offering a deep stretch to the neck and throat. This asana symbolizes receptivity and renewal, inviting a sense of tranquility.",
          slug: "/activities/yoga/matsyasana",
        },
        {
          title: "Sirsasana",
          thumbnail: yogaSirsasana,
          desc: "Sirsasana is the king of all yoga poses, promoting balance, focus, and inner strength. This inverted posture invigorates the mind while enhancing circulation and building confidence.",
          slug: "/activities/yoga/sirsasana",
        },
        {
          title: "Sarvangasana",
          thumbnail: yogaSarvangasana,
          desc: "Sarvangasana is a revered yoga pose that offers many benefits for the body and mind. This promotes rejuvenation, improved circulation, and a calming effect on the nervous system.",
          slug: "/activities/yoga/sarvangasana",
        },
        {
          title: "Setu Bandhasana",
          thumbnail: yogaBandhasana,
          desc: "Setu Bandhasana gracefully opens the chest and hip flexors while strengthening the back and glutes. This yoga posture stimulates the spine and brings a sense of balance and stability.",
          slug: "/activities/yoga/setu-bandhasana",
        },
      ],
    },
    blogs: [
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
    ],
  },
  {
    id: 2,
    name: "Meditation",
    slug: "/activities/meditation",
    header: {
      title: [
        {
          color: true,
          text: "Meditation ",
        },
        {
          color: false,
          text: "heals the mind",
        },
      ],
      desc: [
        {
          color: false,
          text: "Step into the",
        },
        {
          color: true,
          text: " nirvana of self care ",
        },
        {
          color: false,
          text: "from within with meditation",
        },
      ],
      image: meditationHeader,
    },
    activities: {
      title: "MEDITATION TECHNIQUES",
      desc: "Join us in this journey with our world-class meditation gurus and experts just for you at your fingertips.",
      types: [
        {
          title: "Mindfulness Meditation",
          thumbnail: meditationType1,
          desc: "Originated from Hindu shastras,a practise involving attention to present,focusing on breath and thoughts without judgment fostering heightened awareness, acceptance.",
          slug: "/activities/meditation/mindfulness-meditation",
        },
        {
          title: "Breath Awareness Meditation",
          thumbnail: meditationType2,
          desc: "Observing the natural rhythm of breath.Close attention to inhalation and exhalation, redirecting the mind back to the breath.Calms mind, enhances focus, and reduces anxiety.",
          slug: "/activities/meditation/breath-awareness-meditation",
        },
        {
          title: "Kundalini Meditation",
          thumbnail: meditationType3,
          desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to  Balancethe chakras and achieve heightened spiritual awakening. ",
          slug: "/activities/meditation/kundalini-meditation",
        },
        {
          title: "Zen Meditation (Zazen)",
          thumbnail: meditationType4,
          desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath observing thoughts and sensations without attachment or judgment. Cultivate mindfulness,  into true reality.",
          slug: "/activities/meditation/zen-meditation",
        },
        {
          title: "Spiritual meditation",
          thumbnail: meditationType5,
          desc: "Activating one's consciousness. Spiritual meditation involves bonding at a higher consciencel. Highly beneficial to those seeking spiritual growth and oneness with supreme self.",
          slug: "/activities/meditation/spiritual-meditation",
        },
        {
          title: "Walking Meditation",
          thumbnail: meditationType6,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/activities/meditation/walking-meditation",
        },
      ],
    },
    blogs: [
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
    ],
  },
  {
    id: 3,
    name: "Sadhna",
    slug: "/activities/sadhna",
    header: {
      title: ":",
      title: [
        {
          color: true,
          text: "Sadhna: ",
        },
        {
          color: false,
          text: "A Journey of Spiritual Growth",
        },
      ],
      desc: [
        {
          color: false,
          text: "Nurturing the Soul Through ",
        },
        {
          color: true,
          text: "Inner Journey and Transformation",
        },
      ],
      image: sadhnaHeader,
    },
    activities: {
      title: "Sadhna Techniques",
      desc: "Explore transformative Sadhna techniques for emotional healing, leading you to a brighter tomorrow, even amid life's darkestmoments.",
      types: [
        {
          title: "Yoga Sadhana",
          thumbnail: sadhnaYoga,
          desc: "Originated from Hindu shastras,a practise involving attention to present,focusing on breath and thoughts without judgment fostering heightened awareness, acceptance.",
          slug: "/",
        },
        {
          title: "Meditation Sadhana",
          thumbnail: sadhnaMeditation,
          desc: "Observing the natural rhythm of breath.Close attention to inhalation and exhalation, redirecting the mind back to the breath.Calms mind, enhances focus, and reduces anxiety.",
          slug: "/",
        },
        {
          title: "Mantra Sadhana",
          thumbnail: sadhnaMantra,
          desc: "Blending the breathwork, chanting, movement, and visualization to awaken the energy within. Power to  Balancethe chakras and achieve heightened spiritual awakening. ",
          slug: "/",
        },
        {
          title: "Japa Sadhana",
          thumbnail: sadhnaJapa,
          desc: "Originates from Buddhism. Sitting in a specific posture, focusing on breath observing thoughts and sensations without attachment or judgment. Cultivate mindfulness,  into true reality.",
          slug: "/",
        },
        {
          title: "Bhakti Sadhana",
          thumbnail: sadhnaBhakti,
          desc: "Activating one's consciousness. Spiritual meditation involves bonding at a higher consciencel. Highly beneficial to those seeking spiritual growth and oneness with supreme self.",
          slug: "/",
        },
        {
          title: "Kundalini Sadhana",
          thumbnail: sadhnaKundalini,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/",
        },
        {
          title: "Tantric Sadhana",
          thumbnail: sadhnaTantric,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/",
        },
        {
          title: "Seva Sadhana",
          thumbnail: sadhnaSeva,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/",
        },
        {
          title: "Nature Sadhana",
          thumbnail: sadhnaNature,
          desc: "Walking slowly and attentively, cultivating awareness of present. Unlike seated meditation, it allows individuals to engage their bodies and minds while maintaining tranquility.",
          slug: "/",
        },
      ],
    },
    blogs: [
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
      {
        thumbnail: activityBlogThumbnail,
        title: "Maintain a good habit with yourself",
        desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
      },
    ],
  },
];
export const brainExercise = {
  id: 1,
  name: "Brain Exercise",
  slug: "/activities/brain-exercise",
  header: {
    title: [
      {
        color: false,
        text: "Nurturing mental health through ",
      },
      {
        color: true,
        text: "brain exercises",
      },
    ],
    desc: [
      {
        color: false,
        text: "brain exercises that strengthen cognition and ",
      },
      {
        color: true,
        text: "improve mental resilience.",
      },
    ],
    image: brainExerciseHeader,
  },
  activities: {
    title: "Brain Games",
    desc: "Explore a range of brain-boosting exercises and activities, puzzles, techniques, and mental workouts tailored to enhance cognition and mental well-being, memory, focus, and overall brain health.",
    types: [
      {
        title: "The Turtle Hunter",
        thumbnail: brainGameHunter,
        desc: "Welcome to Turtle Treasure Dash, an exciting adventure game where you control a brave and agile turtle on a quest to collect shimmering coins while navigating through a challenging obstacle course. Join our little hero on an epic journey through various terrains, from lush forests to treacherous caves and beyond, in search of precious treasure!",
        slug: "/",
        class: ["order-1", "order-2"],
      },
      {
        title: "Galaxy - The Space Adventure",
        thumbnail: brainGameGalaxy,
        desc: "Embark on an interstellar journey beyond the boundaries of the known universe in Galactic Odyssey, an epic space adventure game that will take you to the stars and beyond. Strap into your advanced spaceship and prepare for an unforgettable voyage through dazzling galaxies, treacherous asteroid fields, and enigmatic wormholes.",
        slug: "/",
        class: ["order-2", "order-1"],
      },
      {
        title: "Treasure Chest",
        thumbnail: brainGameTreasure,
        desc: "Get ready for a thrilling and immersive treasure hunt like no other in 'Treasure Quest Adventures,' an action-packed game that will take you on a mesmerizing journey to uncover hidden riches and long-lost artifacts in mysterious lands. Embark on an epic quest filled with puzzles, challenges, and danger, as you set out to become the greatest treasure hunter the world has ever known!",
        slug: "/",
        class: ["order-1", "order-2"],
      },
    ],
  },
  blogs: [
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
    {
      thumbnail: activityBlogThumbnail,
      title: "Maintain a good habit with yourself",
      desc: "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    },
  ],
};

// Activity Features Blocks
export const activityFeatures = [
  {
    name: "Available Exercises",
    image: feature1,
  },
  {
    name: "Flexible Schedule",
    image: feature2,
  },
  {
    name: "Proper Demonstration",
    image: feature3,
  },
];

export const blogsData = [
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail1,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail2,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail3,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail4,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail5,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail6,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail5,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail6,
  },
  {
    heading: "Maintain a good habit with yourself",
    subheading:
      "Lorem ipsum dolor sit amet consectetur. Neque turpis faucibus eget magna est.Neque turpis faucibus eget magna est.",
    image: blogThumbnail3,
  },
];
