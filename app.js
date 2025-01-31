require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const { dbConnect } = require("./db");
const PORT = process.env.PORT;

// Import routers
const blogRoutes = require('./routers/blogRoutes');
const blogPageRoutes = require('./routers/blogageRoutes');
const commentRoutes = require('./routers/commentRoutes');
const eventRoutes = require('./routers/EventCreation')
const newsletterRoutes = require('./routers/newsletterRoute'); 
const profile = require('./routers/Profile')
const storyReviewRoute  = require('./routers/StoryReview')
const storyRoute = require('./routers/storyRoute');


//Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// use routes

app.use("/blog", blogRoutes);
app.use('/blogpages', blogPageRoutes);
app.use("/comments", commentRoutes);
app.use("/events",eventRoutes)
app.use("/newsletter", newsletterRoutes);
app.use("/profile", profile)
app.use('/storyReview', storyReviewRoute)
app.use("/stories", storyRoute);


app.listen(PORT, () => {
    dbConnect();
    console.log(`Listening on PORT ${PORT}`);
  });

