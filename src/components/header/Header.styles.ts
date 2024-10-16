import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
      height: 60,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      elevation: 2,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      margin: 15,
      color: '#5cc9cdd9'
    },
    iconContainer: {
      flexDirection: 'row',
      gap: 35, // Adjust the spacing between icons
    },
    logo: {
      width: 45,
      height: 45,
      borderRadius: 50
    },

    badge: {
      position: 'absolute',
      top: -5,
      right: -5,
      backgroundColor: 'red',
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    badgeText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });