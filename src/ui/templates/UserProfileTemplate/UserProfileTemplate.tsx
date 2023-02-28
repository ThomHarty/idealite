import React, { ReactElement } from "react";
import { Pressable, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Icon } from "../../../shared/components";
import { Button, Typography } from "../../atoms";
import { EditNavItem, LogoHeader, ProfileHeader, ProfileSwipeButtons, TextTabs } from "../../molecules";
import { IUserProfileTemplateProps } from "./UserProfileTemplate.types";
import { useStyles } from "./useStyles";

export const UserProfileTemplate = ({
    onPressBack,
    profileHeader,
    bio,
    showSwipeButtons = false,
    profileSwipeButtons,
    idea,
    skills,
    experience,
    // edit mode
    editMode = false,
    onPressEditProfile,
    onPressEditBio,
    onPressEditIdea,
    onPressEditSkill,
    onPressAddSkill,
    onPressEditExperience,
    onPressAddExperience,
}: IUserProfileTemplateProps): ReactElement => {
    const baseStyles = useStyles();
    return (
        <View style={baseStyles.container}>
            <ScrollView>
                <LogoHeader onPressBack={onPressBack}>
                        {/* profile header */}
                        <ProfileHeader {...profileHeader} />
                        {/* tabs */}
                        <View style={baseStyles.tabsContainer}>
                            {(editMode && onPressEditProfile) && (
                                <View style={baseStyles.editButtonContainer}>
                                    <Button
                                        text="Edit your profile"
                                        onPress={onPressEditProfile}
                                        variant="tertiary"
                                        icon="edit"
                                    />
                                </View>
                            )}
                            <TextTabs
                                tabOneContent={
                                    <>
                                        <View style={baseStyles.headingContainer}>
                                            <Typography
                                                text={`About ${profileHeader.name}`}
                                                size="text"
                                            />
                                            {editMode && (
                                                <Pressable
                                                    style={baseStyles.editIconContainer}
                                                    onPress={onPressEditBio}
                                                >
                                                    <Icon name="edit" iconStyles={baseStyles.editIcon} />
                                                </Pressable>
                                            )}
                                        </View>
                                        <View style={baseStyles.textContainer}>
                                            <Typography
                                                text={bio}
                                                size="tiny"
                                            />
                                        </View>
                                    </>
                                }
                                tabTwoContent={
                                    <>
                                        <View style={baseStyles.headingContainer}>
                                            <Typography
                                                text={idea.title}
                                                size="text"
                                            />
                                            {editMode && (
                                                <Pressable
                                                    style={baseStyles.editIconContainer}
                                                    onPress={onPressEditIdea}
                                                >
                                                    <Icon name="edit" iconStyles={baseStyles.editIcon} />
                                                </Pressable>
                                            )}
                                        </View>
                                        <View style={baseStyles.textContainer}>
                                            <Typography
                                                text={idea.body}
                                                size="tiny"
                                            />
                                        </View>
                                    </>
                                }
                                tabThreeContent={
                                    <>
                                        {skills.map((skill, i) => {
                                            return (
                                                <EditNavItem
                                                    key={i}
                                                    id={skill.id}
                                                    text={skill.title}
                                                    disabledEdit={!editMode}
                                                    onPress={onPressEditSkill ? onPressEditSkill : undefined}
                                                />
                                            );
                                        })}
                                        {(editMode && onPressAddSkill) && (
                                            <View style={baseStyles.addButtonContainer}>
                                                <Button
                                                    text="Add skill"
                                                    onPress={onPressAddSkill}
                                                    variant="tertiary"
                                                    icon="plus"
                                                />
                                            </View>
                                        )}
                                    </>
                                }
                                tabFourContent={
                                    <>
                                        {experience.map((exp, i) => {
                                            return (
                                                <EditNavItem
                                                    key={i}
                                                    id={exp.id}
                                                    text={exp.title}
                                                    subText={exp.company}
                                                    details={exp.date}
                                                    disabledEdit={!editMode}
                                                    onPress={onPressEditExperience ? onPressEditExperience : undefined}
                                                />
                                            );
                                        })}
                                        {(editMode && onPressAddExperience) && (
                                            <View style={baseStyles.addButtonContainer}>
                                                <Button
                                                    text="Add experience"
                                                    onPress={onPressAddExperience}
                                                    variant="tertiary"
                                                    icon="plus"
                                                />
                                            </View>
                                        )}
                                    </>
                                }
                            />
                        </View>
                </LogoHeader>
            </ScrollView>
            {(showSwipeButtons && profileSwipeButtons) && (
                <View style={baseStyles.swipeButtonsContainer}>
                    <ProfileSwipeButtons {...profileSwipeButtons} />
                </View>
            )}
        </View>
    );
};
