export const projects = [
    {
      index: "1",
      title: "Intelligent Digital Communications VIP Research",
      description: "The Intelligent Digital Communications research group's ongoing project aims to create a smart, adaptive wireless bandwidth allocation system. My work primarily focuses on machine learning pipelines for real-time wireless signal classifications and data preprocessing, which we published our paper, 'Cognitive Wireless Networks: Research, Applications, and Testbed' to the 2023 IEEE conference.\n\nWe created multi-model deep neural networks while making use of digital signal processing and embedded systems knowledge. Additionally, we were inspired by differentiable network architecture search algorithms like DARTS to use Resnet building blocks with an embedding to map this discrete search space to a continuous one. From there, we utilize a recurrent neural network to select the best backbone for our task. \n\nPrior to this, we had to handle complex FC32 data, which I filtered, labeled, and wrote code to automate the creation of datasets. We worked with Faraday cage data, drone data, and real stadium recordings with added random white gaussian noise at varying signal to noise ratios in order to properly experiment and robustly train our wireless classification.",
      paper: "project_images/VIP/IDC_Paper.pdf",
      img: ["project_images/VIP/abstract_vip.png", "project_images/VIP/location.png"],
      imgLarge: ["project_images/VIP/abstract_vip_large.png", "project_images/VIP/location_large.png"],
      movie: "",
      other: ""
    },
    {
      index: "2",
      title: "Large Language Model Compression Research",
    description: "Large Language Models such as GPT-175B, PaLM-2, and Claude 2 have gained immense popularity,serving millions of users daily with their conversational generations. The cumulative effect of the auto-regressive generation results in potential queuing delays and increased time overhead for users. Therefore, we aim to mitigate inference latency for user experience.\n\nDifficulties in state of the art solutions arise due to the massive size of LLMs and system hardware constraints. We attempt to mitigate issues with inference latency via architectural changes prior to actually training, essentially providing the model with capability for richer understanding with less parameters. Our design is depicted as the second image to the left, showcasing how we maintained model accuracy despite fewer transformer blocks by adding richer attention heads with Linear and Swish non-linear activation functions between each head. Current day datasets are massive, with RedPajama having over 1 billion data points for natural language purposes and our experiments are based on the recent open-sourced Llama2 LLM with 7 billion parameters. Not including the datasets, the model requires 13 GB of memory and 56 GB of RAM for training. So we could not retrain this model on standard devices and we employed a single A100 Nvidia GPU from the Georgia Tech SAIL Research Group.\n\nOur results were extremely promising and we are submitting this paper to Neurips 2024. For more information on this project, see the button below.",
      paper: "project_images/LLM/LLM_Paper.pdf",
      img: ["project_images/LLM/abstract_llms.png", "project_images/LLM/architecture_llms.png", "project_images/LLM/evaluations.png"],
      imgLarge: ["project_images/LLM/abstract_llms_large.png", "project_images/LLM/architecture_llms_large.png", "project_images/LLM/evaluations_large.png"],
      movie: "",
      other: ""
    },
    {
      index: "3",
      title: "AeroForecast — UI and Two-stage ML Model for Flight Delay Prediction",
      description: "People aren't aware of when their flight is going to be delayed or not, but by the time they reach the airport, it's often too late to make travel arrangements. By creating a solution, users of AeroForecast can prepare for a potential delay ahead of time. This project's aim is to utilize the abundant data from the Bureau of Transportation Statistics to train a two-stage machine learning model that can accurately predict likelihood of a fligth's delay and the amount of time expected.\n\nMy work on this project lied in creation and preprocessing of the datasets, joining it with weather data, creating the backend for API calls to real-time weather and flight data for each airport, the frontend flight page UI, and model architectural decisions.\n\nThe main link below will take you to our website that we hosted! The second link below will take you to our report and documentation, and in case you have more questions regarding our implementation, I have our code on GitHub under AeroForecast and AeroForecast—Backend.",
      paper: "https://656d9b0a5dabd32eea7f37c9--dynamic-melba-9fb616.netlify.app/",
      img: "",
      movie: "project_images/AeroForecast/aeroforecast.mp4",
      other: "https://docs.google.com/document/d/19HP0t-IPVXQNU0yU8Mb1ITT1Le54Wi74ev4qaGpsjNk/edit?usp=sharing"
    },
    {
      index: "4",
      title: "Hand Signs Neural Network from Scratch",
      description: "One week during a period when I had more free time, I sat down and decided to create a neural network from scratch, but in Java. I implemented common activation functions, gradient descent algorithms, and image preprocessing for hand sign BMP file inputs.\n\nFor implementation, I focused on a generalized approach so that I can specify the model requirements, hyperparameters, and more before training. In this way, I was able to fully experiment with a regular neural network and better understand its workings.",
      paper: "https://github.com/Nathan-Wang23/neural_network_java",
      img: ["project_images/Neural/neural.png"],
      imgLarge: ["project_images/Neural/neural_large.png"],
      movie: "",
      other: ""
    },
    {
      index: "5",
      title: "Face Detection in Video",
      description: "As I started working with machine learning and neural networks, I also delved into computer vision and its applications for interesting tasks like pose and facial analysis. In this project, I used Python and CV2 libraries to train and run inference on videos frame by frame. By implementing a sliding window across a single frame, we can detect faces and facial features like the points depicted in the video to the left. In terms of dataset, I used an existing dataset online that includes images and a COCO annotation style file for bounding boxes and points.\n\nAfter detecting faces and facial features within each frame, I stitched the frames back together with the properly measured frame rate to recreate the video with the added bounding boxes and points overlayed on the original video.",
      paper: "https://github.com/Nathan-Wang23/video_facial_detection",
      img: ["project_images/Video/crop_face.jpg"],
      movie: "project_images/Video/jaijai_final.mp4",
      other: ""
    },
    {
      index: "6",
      title: "Handwriting to LaTeX Deep Learning Project",
      description: "Many students face the struggle where their math or algorithm courses require heavy work that is best done by hand but receive 'Too Messy' or 'Illegible' comments on their submissions. We attempt to provide an easy solution for these students by creating a machine learning model and application that can intake an image of handwriting and output LaTeX formatted text. In this way, students can easily do their work by hand, take a picture and have it automatically converted to an easy-to-read format. However, we faced many problems when delving into this task, the largest being the complete lack of prior work done on this task. The only other existing application with our problem space is only for iPad and converts handwriting to LaTeX as the user writes with an Apple Pencil. We therefore want to create an application that people without access to iPads and smart styluses can use to achieve the same and even better results.\n\nWe initially created a Convolutional Neural Network encoder with various modifications on the commonly-used ResNet50 backbone and implemented a multi-attention head Transformer as the decoder. Properly setting up our testbed, training, and data proved the most arduous tasks. Data preprocessing required the downloading of the CROHME 2023 dataset and parsing through inkml files to extract LaTeX annotations and properly resize and grayscale images. Overall, our dataset was 9,511 image—annotation pairs.\n\nThe goal of our model is to take an image, encode it with our CNN encoder to extract features and pass it to our decoder that will auto-regressively generate LaTeX tokens. This brings us to one of our largest issues: the Tokenizer. To date, there is no widely-accepted, perfectly working tokenizer for LaTeX. English and other languages have robust tokenizers that split on characters and spaces, but LaTeX formatting is different, with curly braces and required orderings for syntax. So, I manually implemented a Regular Expression tokenizer that splits expressions by commands, braces and brackets, numbers, and more. I experimented with varying size tokens; for example we want to continue exploring the accuracy changes when employing a tokenizer that takes the entire token as 'frac{1}{2}' rather than ['frac', '{', '1', '}', '{', '2', '}'] as my RegEx tokenizer would. And finally, in order to set up our training and generation loops, I had to properly implement special tokens like Beginning and End of Sequence so that our model learns to see the first token and auto-regressively predict the NEXT token.\n\nIn terms of model architectural decisions, we also explored a single and bidirectional LSTM layer with our decoder. We hope that we could leverage the Convolutional Neural Network's spatial understanding and make use of the LSTM's temporal learning. In this way, we could understand the spatial location of writing while also learning the temporal syntax of LaTeX.\n\nOverall, you can see our findings and accuracies in the images to the left, as well as in more detail in our paper at the link provided. We hope to continue work on this project and gather even better results with larger datasets (which don't exist yet) and different tokenizers.",
      paper: "project_images/Handwriting2LaTeX/LaTeX.pdf",
      img: "project_images/Handwriting2LaTeX/latex_final.png",
      movie: "ONE",
      other: ""
    },
    {
      index: "7",
      title: "Face2Alias AWS Project",
      description: "Face2Alias was a cloud infrastructure project utilizing AWS services like Lambda, Rekognition, IAM, S3, and Athena RDS. Our goal was to implement an internal Amazon extension that can help identify employees by comparing images of their face to their Phonetool badge. Using a ML model backed by Rekognition, we created a fun tool that can be used to share photos to other Amazonians without knowing their names or aliases.\n\nOur frontend uses AWS Amplify and React, while we implemented a Lambda backend that incorporates VPC endpoints for S3 and database lookup and storage. Our application has users sign up with their IAM credentials, allowing access to their phonetool badge and alias, which is stored in our private database. Then, the user can upload any number of images and have our Lambdas run our model compared to photos within the database to find the best matching faces and output their aliases with a green bounding box around their face. For non-Amazonians or those not signed up for our application, it outputs a red bounding box. Users can then save, scroll through past image searches, and email Amazon aliases a copy of the image they are a part of.",
      paper: "https://github.com/Nathan-Wang23/face2alias_aws",
      img: "project_images/Face2Alias/face2alias_final.png",
      imgLarge: ["project_images/Face2Alias/face2alias_large.png"],
      movie: "ONE",
      other: ""
    },
    {
      index: "8",
      title: "YouTube To Spotify Web Application",
      description: "While I was a member of the Georgia Tech Web Development Club, I worked on a variety of projects, my favorite being a YouTube to Spotify playlist converter application. Throughout this project, I applied my knowledge of frontend and backend tools like ReactJS, axios, Postman, and more. As shown on the left, we have a authentification for both YouTube via Google Auth and Spotify via Oauth. After enabling the proper scopes and permissions, users are able to see their playlists on both accounts, select one (either YouTube or Spotify) and convert. Our conversion algorithm calls the API endpoints for YouTube and Spotify and looks up songs by title and artist name. For the YouTube API, the best we could do was append key words and select the top 5 videos that appear when searched. ",
      paper: "https://github.com/vig-star/YouTubeToSpotify",
      img: "project_images/YoutubeSpotify/youtube_final.png",
      imgLarge: ["project_images/YoutubeSpotify/YoutubeSpotify_large.png"],
      movie: "ONE",
      other: ""
    },
    {
      index: "9",
      title: "GPS Location Based Game",
      description: "Another fun project I worked on was developing a GeoLocation based game while in Berlin. I first created a data visualization web application to view the top games played around the world. Then, I got more inspired and created a GPS-capable mobile application that is an escape room through the city of Berlin. Without spoiling the plot of the game, the gist of it is that you are an agent for United States in West Berlin while the Berlin wall was up. You have until sunset (calculated using a real-time API) to 'sneak' to East Berlin to gather news about a fellow agent and any immediate bomb threats. The game provides clues and GPS mapping as the player wanders the city to locate and solve puzzles that will provide codes to move on to the next clue.\n\nThis GeoLocation version of an escape room allows users to exercise more, provides a fun, interesting backstory and game while exploring Berlin, and includes some historical facts.\n\nThis game was exciting and fun for me to create, since I had to wander throughout Berlin, look for historical and memorable landmarks, and think of clues that will point the players to the next stop. I had to carefully plan a route that could tell my story while giving the players a walkable, tour of Berlin.",
      paper: "https://github.com/Nathan-Wang23/choropleth_visualization",
      img: "project_images/GeoLocation/geolocation_final.png",
      imgLarge: "project_images/GeoLocation/geolocation_final.png",
      movie: "ONE",
      other: ""
    },
    {
      index: "10",
      title: "Music News Mobile Appliation",
      description: "Another application I worked profusely on was a mobile application that allows users to log into their Spotify accounts, view their playlists, receive news relating to new albums or concerts in the area for the top artists, and even choose songs to send to Dall-e API for an artistic poster or album cover based on Genius lyrics and Spotify song features. Additionally, we have a TikTok-esque feed where a daily feed appears for users based on their top artists and recently liked songs on Spotify. We use the YouTube API endpoint to search and return covers, amateur renditions, and sheet notes for guitar and piano of popular songs the user enjoys listening to.\n\nThe main draw of our application is the music news tab. Many people have mentioned that their source for news relating to music, whether it comes from Instagram, Google, or TikTok, is cluttered with the other topics they're interested in. Our application, Musify, is a niche news application that allows users to be notified when their favorite artists drop a new album or are performing nearby. We use a real-time concert API, and so when an entry contains a link to purchase tickets, we provide users with a description of the concert venue, ticket prices, and where to buy.\n\nAs we developed this app, we performed a comprehensive domain and use case analysis, utilized Blue/Green deployment with user surveys, and created Value Proposition and Business Model Canvases. In this way, we treated our idea as a potential start up operation and focused on building up all aspects of a successful business, including good design documentation and learning how to pitch our idea to potential users.\n\nIn terms of development, I implemented our frontend with React Native, incorporated AWS IAM Cognito for secure user logins, attached our SQL database to our backend for user information, and fully developed the backend algorithms to choose and display a user's top artist news and videos. We used a multitude of APIs, such as Spotify, Genius Lyrics, Music News, and Dall-E APIs.",
      paper: "https://github.com/Nathan-Wang23/TeamDNA",
      img: ["project_images/MusicNews/bmc.png", "project_images/MusicNews/mobileApps.png"],
      imgLarge: ["project_images/MusicNews/bmc_large.png", "project_images/MusicNews/mobileApps_large.png"],
      movie: "",
      other: ""
    },
    {
      index: "11",
      title: "Harris Point and SIFT Detection",
      description: "This project was completed during my CS6476 Computer Vision course. I worked on Harris point and SIFT corner detection for image transpositions. Using an x and y sobel filter and gaussian filter, I ran a Harris corner detection algorithm from scratch to determine the key points in the image. Then, I did the same for another slightly transposed or image where the camera was moved and calculated the points closest to each point to the ratio of the second closest point. In this way, we could map positions of key corner points and determine how the image shifted. However, regarding changes in size, Harris point detection is perfectly rotationally invariant but not scale invariant, which is why I then implemented a SIFT corner detection. ",
      paper: "https://github.com/Nathan-Wang23/harris_corner_detection",
      img: "project_images/HarrisPoint/harris_final.png",
      imgLarge: ["project_images/HarrisPoint/sobel_large.png", "project_images/HarrisPoint/notredame_large.png", "project_images/HarrisPoint/rushmore_large.png"],
      movie: "ONE",
      other: ""
    },
    {
      index: "12",
      title: "Simulated Perception of Robotic Cars and Drones",
      description: "In this project, I simulated the perception of robots and drones as they navigate a space filled with obstacles. First, I had to create the environment with classifications of obstacles and goals, which I use to visualize the paths of the robots through 2D and 3D space. I then implemented a rapidly-exploring random tree search to find the optimal path through the room to reach all goals designated as different colors on the far top left image.\n\nFor the drone's simulated movement, I used a 3D space to visualize movement using all directions the drone can move. For this, I had to create a hoops class in which a goal is a 2D planar circle within a 3D space. From there, I again used my RRT walk to find the path best suited for the drone and visualize its path, shown in the bottom image.",
      paper: "",
      img: "project_images/RoboticPerception/robotic_final.png",
      imgLarge: ["project_images/RoboticPerception/roboticperception2d_large.png", "project_images/RoboticPerception/droneperception3d_large.png"],
      movie: "ONE",
      other: ""
   },
   {
    index: "13",
    title: "Predicting Biodegradability and Generating Biodegradabile Molecules with WGAN and RGCN VGAEs",
    description: "Many environmental challenges can be attributed to types of materials, such as plastics and their polymer components, and their corresponding toxicity and biodegradability. New materials need to be innovated, but the process of doing so manually in labs becomes extremely expensive and time-intensive. This paper explores advanced machine learning models, including specialized Wasserstein Generative Adversarial Networks and Variational Graph Autoencoders (VGAE), to create new molecular structures, trained on a dataset of various existing molecules and their corresponding biodegradability information. These models will be able to generate new molecular structures that can be used for materials that are stable and possess qualities that are more environmentally safe. Code for our project can be found at https://github.com/Nathan-Wang23/MLC_Final_Project. \n\n Our research focused on the prediction and generation of biodegradable molecules using advanced generative and classification models. By leveraging a Relational Graph Convolutional Network (RGCN) architecture, our Biodegradability model achieved a balanced accuracy of 0.8478, surpassing the state-of-the-art Generalized Convolutional Network (GCN) model, which scored 0.84 across the same dataset. This improvement demonstrates our model's precision and specificity, crucial for robustly and accurately predicting biodegradability in molecules​​ given just the chemical structures.\n\nWe conducted extensive experiments and latent space conditioning to refine both our WGAN and VGAE models. Our primary metrics for evaluation included validity, novelty, and uniqueness of the generated molecules. Initial experiments highlighted challenges in generating molecules with an appropriate atom count, leading to adjustments in the loss regularizer to balance molecular complexity and generation validity. These experiments resulted in a notable uniqueness increase from 30% to 61%, maintained a 70% validity rate and 88% novelty rate, but further improvements are needed to enhance overall validity and biodegradability​ of generation through better feature conditioning in the latent space. More specifically, we want to explore the possibility of using distance based or extended connectivity fingerprints featurizers, as well as measuring electron density with a Gaussian Multipole featurizer.",
    paper: "project_images/MLC/VGAE.pdf",
    img: ["project_images/MLC/abstract_mlc.png"],
    imgLarge: ["project_images/MLC/abstract_mlc_large.png"],
    movie: "ONE",
    other: "https://github.com/Nathan-Wang23/MLC_Final_Project"
  }
  ];

