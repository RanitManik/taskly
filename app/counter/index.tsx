import { Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { theme } from "../../theme";
import { registerForPushNotificationsAsync } from "../../utils/registerForPushNotificationsAsync";
import * as Notifications from "expo-notifications";
import { useEffect, useState } from "react";
import { Duration, intervalToDuration, isBefore } from "date-fns";
import { TimeSegment } from "../../components/TimeSegmant";

// 10 seconds from now
const timestamp = Date.now() + 10 * 1000;

type CountdownStatus = {
    isOverdue: boolean;
    distance: Duration;
};

export default function CounterScreen() {
    const [status, setStatus] = useState<CountdownStatus>({
        isOverdue: false,
        distance: {},
    });

    useEffect(() => {
        const intervalID = setInterval(() => {
            const isOverdue = isBefore(timestamp, Date.now());
            const distance = intervalToDuration(
                isOverdue
                    ? { start: timestamp, end: Date.now() }
                    : {
                          start: Date.now(),
                          end: timestamp,
                      },
            );
            setStatus({ isOverdue, distance });
        }, 1000);
        return () => {
            clearInterval(intervalID);
        };
    }, []);

    const scheduleNotification = async () => {
        const result = await registerForPushNotificationsAsync();
        if (result === "granted") {
            await Notifications.scheduleNotificationAsync({
                content: {
                    title: "I am a Notification from your app 😁",
                },
                trigger: {
                    seconds: 5,
                },
            });
        } else {
            Alert.alert(
                "Unable to schedule notifications",
                "Enable the notification permission for the app in the settings",
            );
        }
    };

    return (
        <View
            style={[
                styles.container,
                status.isOverdue ? styles.containerLate : null,
            ]}
        >
            {status.isOverdue ? (
                <Text
                    style={[
                        styles.heading,
                        status.isOverdue && styles.whiteText,
                    ]}
                >
                    This is Overdue by
                </Text>
            ) : (
                <Text style={styles.heading}>Thing due in...</Text>
            )}
            <View style={styles.row}>
                <TimeSegment
                    number={status.distance.days ?? 0}
                    unit={"Days"}
                    textStyle={status.isOverdue && styles.whiteText}
                />
                <TimeSegment
                    number={status.distance.hours ?? 0}
                    unit={"Hours"}
                    textStyle={status.isOverdue && styles.whiteText}
                />
                <TimeSegment
                    number={status.distance.minutes ?? 0}
                    unit={"Minutes"}
                    textStyle={status.isOverdue && styles.whiteText}
                />
                <TimeSegment
                    number={status.distance.seconds ?? 0}
                    unit={"Seconds"}
                    textStyle={status.isOverdue && styles.whiteText}
                />
            </View>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={scheduleNotification}
            >
                <Text style={styles.buttonText}>I have completed the task</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
    },
    containerLate: {
        backgroundColor: theme.colorRed,
    },
    button: {
        backgroundColor: theme.colorBlack,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
    },
    buttonText: {
        fontWeight: "bold",
        letterSpacing: 1,
        textTransform: "uppercase",
        color: theme.colorWhite,
    },
    row: {
        flexDirection: "row",
        marginBottom: 24,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 24,
    },
    whiteText: {
        color: theme.colorWhite,
    },
});
