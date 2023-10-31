import React from 'react';
import { Text, ScrollView, View } from 'native-base';

const AboutScreen = () => {
    const underlineStyle = {
        backgroundColor: 'green',
        height: 4,
        marginTop: 4,
    };

    return (
        <ScrollView p={4}>
            <View mb={4}>
                <Text fontSize="3xl" fontWeight="bold">Our Mission</Text>
                <View style={underlineStyle} />
                <Text fontSize="lg">
                    Our Mission is to offer users simple state-of-the-art tools to recognize
                    possible nutrient deficiencies or excesses, helping them understand the
                    correlation between illness and nutrient deficiencies. We aim to provide
                    the Best Nutrition App as well as the Best Nutrients Tracker App. Our goal is
                    to "Put Your Health Back in Your Hands" and "Fix Your Issue Before the Issue
                    Becomes Your Illness." This also makes for the Best Healthy Gifts for Men.
                </Text>
            </View>
            <View mb={4}>
                <Text fontSize="3xl" fontWeight="bold">Who We Are</Text>
                <View style={underlineStyle} />
                <Text fontSize="lg">
                    The Vita Checks App is an easy-to-use, Voice Input app that tracks your
                    daily nutrient levels, alerts users when required amounts are not met,
                    and offers food suggestions when needed to obtain your daily required vitamins.
                    The most annoying part of any nutrition app is inputting your foods multiple times
                    a day. Our cutting-edge voice technology makes it easy for you to quickly input
                    your food and get the answers you need to balance your health. We are passionate
                    about helping you find balance and providing individualized answers to your body's health.
                </Text>
            </View>
            <View mb={4}>
                <Text fontSize="3xl" fontWeight="bold">Why</Text>
                <View style={underlineStyle} />
                <Text fontSize="lg">
                    Numerous pollutants have negatively impacted the nutritional quality of foods.
                    Understanding this and being able to obtain personal nutrient levels is
                    urgently important for staying healthy. Have you ever thought, "I want to Check
                    My Vitamin Levels," but either you don't have health insurance or know that
                    your doctor will never check all of your vitamins in one appointment? Now you can!
                    You'll now know when you're not getting the necessary daily nutrients/vitamins and
                    fix the issue that day before it turns into illness.
                </Text>
            </View>
        </ScrollView>
    );
};

export default AboutScreen;
