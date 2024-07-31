import React from 'react'
import { Tabs } from 'expo-router'
import icons from '../../constants/icons'
import TabIcon from '../../components/TabIcon'

const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}>
        <Tabs.Screen 
            name="home" 
            options={{
                title: "Home", 
                headerShown : false, 
                tabBarIcon: ({color, focused}) => (
                <TabIcon 
                    icon={icons.home} 
                    color= {color} 
                    name= "Home" 
                    focused={focused} />
                )}} />
        <Tabs.Screen 
            name="orders" 
            options={{
                title: "Orders", 
                headerShown : false, 
                tabBarIcon: ({color, focused}) => (
                <TabIcon 
                    icon={icons.orders} 
                    color= {color} 
                    name= "Orders" 
                    focused={focused} />
                )}} />
        <Tabs.Screen 
            name="growth" 
            options={{
                title: "Growth", 
                headerShown : false, 
                tabBarIcon: ({color, focused}) => (
                <TabIcon 
                    icon={icons.growth} 
                    color= {color} 
                    name= "Growth" 
                    focused={focused} />
                )}} />
        <Tabs.Screen 
        name="settings" 
        options={{
            title: "Settings", 
            headerShown : false, 
            tabBarIcon: ({color, focused}) => (
            <TabIcon 
                icon={icons.settings} 
                color= {color}
                name= "Settings" 
                focused={focused} />
            )}} />
      </Tabs>
    </>
  )
}

export default TabLayout

//   return (
//     <>
//       <Tabs
//         screenOptions={{
//           tabBarActiveTintColor: "#FFA001",
//           tabBarInactiveTintColor: "#CDCDE0",
//           tabBarShowLabel: false,
//           tabBarStyle: {
//             backgroundColor: "#161622",
//             borderTopWidth: 1,
//             borderTopColor: "#232533",
//             height: 84,
//           },
//         }}
//       >
//         <Tabs.Screen
//           name="home"
//           options={{
//             title: "Home",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.home}
//                 color={color}
//                 name="Home"
//                 focused={focused}
//               />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="bookmark"
//           options={{
//             title: "Bookmark",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.orders}
//                 color={color}
//                 name="Bookmark"
//                 focused={focused}
//               />
//             ),
//           }}
//         />

//         <Tabs.Screen
//           name="create"
//           options={{
//             title: "Create",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.gowth}
//                 color={color}
//                 name="Create"
//                 focused={focused}
//               />
//             ),
//           }}
//         />
//         <Tabs.Screen
//           name="profile"
//           options={{
//             title: "Profile",
//             headerShown: false,
//             tabBarIcon: ({ color, focused }) => (
//               <TabIcon
//                 icon={icons.settings}
//                 color={color}
//                 name="Profile"
//                 focused={focused}
//               />
//             ),
//           }}
//         />
//       </Tabs>
//     </>
//   );
// };

// export default TabLayout;