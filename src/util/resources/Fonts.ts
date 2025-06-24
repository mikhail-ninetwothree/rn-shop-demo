import Dimens from '@dimens';
import { TextStyle } from 'react-native';

// TODO: Usually, our designers calls the fonts like H1, H2, H3, Body, Subtitle, etc. so you can expand here. Also
const H1 = {
    fontFamily: 'Raleway-Bold',
    fontWeight: Dimens.fontWeightBold,
    fontSize: Dimens.fontSizeLargest,
    lineHeight: Dimens.lineHeightLargest,
} as TextStyle;

const H2 = {
    fontFamily: 'Raleway-Bold',
    fontWeight: Dimens.fontWeightBold,
    fontSize: Dimens.fontSizeX6Large,
    lineHeight: Dimens.lineHeightX4Large,
} as TextStyle;

const H2_5 = {
    fontFamily: 'Raleway-ExtraBold',
    fontWeight: Dimens.fontWeightExtraBold,
    fontSize: Dimens.fontSizeX5Large,
    lineHeight: Dimens.lineHeightX_5Large,
} as TextStyle;

const H3 = {
    fontFamily: 'RethinkSans-SemiBold',
    fontWeight: Dimens.fontWeightLight300,
    fontSize: Dimens.fontSizeXLarge,
    lineHeight: Dimens.lineHeightXLarge,
} as TextStyle;

const H3_1 = {
    fontFamily: 'Raleway-ExtraBold',
    fontWeight: Dimens.fontWeightExtraBold,
    fontSize: Dimens.fontSizeX2Large,
    lineHeight: Dimens.lineHeightLarge1_5X,
} as TextStyle;

const H4 = {
    fontFamily: 'NunitoSans',
    fontWeight: Dimens.fontWeightLight300,
    fontSize: Dimens.fontSizeXLarge,
    lineHeight: Dimens.lineHeightX3Large,
} as TextStyle;

const H5 = {
    fontFamily: 'NunitoSans',
    fontWeight: Dimens.fontWeightBold,
    fontSize: Dimens.fontSizeLarge,
    lineHeight: Dimens.lineHeightX3Large,
} as TextStyle;

const H6 = {
    fontFamily: 'NunitoSans',
    fontWeight: Dimens.fontWeightRegular400,
    fontSize: Dimens.fontSizeNormal1_5X,
    lineHeight: Dimens.lineHeightMedium,
} as TextStyle;

const Button = {
    fontFamily: 'NunitoSans',
    fontWeight: Dimens.fontWeightLight300,
    fontSize: Dimens.fontSizeX3Large,
    lineHeight: Dimens.lineHeightX_5Large,
} as TextStyle;

const Subtitle = {
    fontFamily: 'Raleway-Bold',
    fontWeight: Dimens.fontWeightSemiBold600,
    fontSize: Dimens.fontSizeMedium1_5X,
    lineHeight: Dimens.lineHeightMedium1_5X,
} as TextStyle;

const Subtitle2 = {
    fontFamily: 'Raleway-Bold',
    fontWeight: Dimens.fontWeightSemiBold600,
    fontSize: Dimens.fontSizeNormal,
    lineHeight: Dimens.lineHeightNormal1_75X,
} as TextStyle; 

const Subtitle3 = {
    fontFamily: 'Raleway-ExtraBold',
    fontWeight: Dimens.fontWeightExtraBold,
    fontSize: Dimens.fontSizeNormal,
    lineHeight: Dimens.lineHeightNormal1_75X,
} as TextStyle; 

const SubtitleSmall = {
    fontFamily: 'RethinkSans-SemiBold',
    fontWeight: Dimens.fontWeightSemiBold600,
    fontSize: Dimens.fontSizeNormal,
    lineHeight: Dimens.lineHeightMedium,
} as TextStyle;

const SubtitleSmaller = {
    fontFamily: 'Raleway-Bold',
    fontWeight: Dimens.fontWeightSemiBold600,
    fontSize: Dimens.fontSizeSmaller,
    lineHeight: Dimens.lineHeightNormal1_5X,
} as TextStyle;

const Body = {
    fontFamily: 'Poppins-Medium',
    fontWeight: Dimens.fontWeightMedium500,
    fontSize: Dimens.fontSizeNormal,
    lineHeight: Dimens.lineHeightMedium,
};

const Caption = {
    fontFamily: 'NunitoSans',
    fontWeight: Dimens.fontWeightRegular400,
    fontSize: Dimens.fontSizeSmall,
    lineHeight: Dimens.lineHeightNormal,
} as TextStyle;

export default {
    H1,
    H2,
    H2_5,
    H3,
    H3_1,
    H4,
    H5,
    H6,
    Button,
    Subtitle,
    Subtitle2,
    Subtitle3,
    SubtitleSmall,
    SubtitleSmaller,
    Body,
    Caption,
};
