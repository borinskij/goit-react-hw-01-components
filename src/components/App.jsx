// import { FotoUser } from 'components/Description/Description.jsx';
import { ProfileCard } from 'components/Profile/Profile.jsx';
// import { Stats } from 'components/Stats/Stats.jsx';
// import user from 'assets/user.json';
// console.log('user :', user);
// console.log('user.name :', user.username);
// console.log('user.stats :', user.stats);

export const App = () => {
  return (
    <div>
      <ProfileCard />
      {/* <FotoUser
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
        />
        <Stats stats={user.stats} />
       */}
    </div>
  );
};

// <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// />

// <div class="profile">
//   <div class="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       class="avatar"
//     />
//     <p class="name">Petra Marica</p>
//     <p class="tag">@pmarica</p>
//     <p class="location">Salvador, Brasil</p>
//   </div>

//   <ul class="stats">
//     <li>
//       <span class="label">Followers</span>
//       <span class="quantity">1000</span>
//     </li>
//     <li>
//       <span class="label">Views</span>
//       <span class="quantity">2000</span>
//     </li>
//     <li>
//       <span class="label">Likes</span>
//       <span class="quantity">3000</span>
//     </li>
//   </ul>
// </div>
