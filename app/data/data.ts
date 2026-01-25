// data.ts - Apple Product Diagnosis Data

export type ProductType =
    | "iphone"
    | "ipad"
    | "macbook_air"
    | "macbook_pro"
    | "imac"
    | "mac_mini"
    | "mac_studio"
    | "mac_pro"
    | "apple_watch"
    | "airpods"
    | "airpods_pro"
    | "airpods_max"
    | "apple_tv"
    | "homepod"
    | "magic_keyboard"
    | "magic_mouse"
    | "magic_trackpad"
    | "apple_pencil"
    | "beats"
    | "other";

export type IssueType =
    | "broken_screen"
    | "cracked_back_glass"
    | "dead_battery"
    | "battery_draining"
    | "camera_malfunction"
    | "microphone_issues"
    | "speaker_issues"
    | "charging_port_damaged"
    | "water_damage"
    | "overheating"
    | "software_issues"
    | "touch_id_not_working"
    | "face_id_not_working"
    | "wifi_bluetooth_issues"
    | "physical_damage"
    | "keyboard_malfunction"
    | "trackpad_issues"
    | "display_issues"
    | "power_button_broken"
    | "volume_buttons_broken"
    | "data_recovery"
    | "logic_board_failure"
    | "hinge_damage"
    | "liquid_damage"
    | "not_turning_on"
    | "frozen_unresponsive"
    | "storage_failure"
    | "ram_issues"
    | "graphics_issues"
    | "other";

export type WarrantyStatus = "active" | "expired" | "unknown" | "applecare_plus";

export type ContactMethod = "email" | "phone" | "sms" | "whatsapp";

export interface ProductOption {
    key: string;
    label: string;
}

export interface ModelOption {
    key: string;
    label: string;
    year?: string;
    specs?: string[];
}

// Product Types
export const PRODUCT_TYPES: ProductOption[] = [
    { key: "iphone", label: "iPhone" },
    { key: "ipad", label: "iPad" },
    { key: "macbook_air", label: "MacBook Air" },
    { key: "macbook_pro", label: "MacBook Pro" },
    { key: "imac", label: "iMac" },
    { key: "mac_mini", label: "Mac mini" },
    { key: "mac_studio", label: "Mac Studio" },
    { key: "mac_pro", label: "Mac Pro" },
    { key: "apple_watch", label: "Apple Watch" },
    { key: "airpods", label: "AirPods" },
    { key: "airpods_pro", label: "AirPods Pro" },
    { key: "airpods_max", label: "AirPods Max" },
    { key: "apple_tv", label: "Apple TV" },
    { key: "homepod", label: "HomePod" },
    { key: "magic_keyboard", label: "Magic Keyboard" },
    { key: "magic_mouse", label: "Magic Mouse" },
    { key: "magic_trackpad", label: "Magic Trackpad" },
    { key: "apple_pencil", label: "Apple Pencil" },
    { key: "beats", label: "Beats Headphones" },
    { key: "other", label: "Other Apple Product" },
];

// Issue Types
export const ISSUE_TYPES: ProductOption[] = [
    { key: "broken_screen", label: "Broken/Cracked Screen" },
    { key: "cracked_back_glass", label: "Cracked Back Glass" },
    { key: "dead_battery", label: "Dead Battery" },
    { key: "battery_draining", label: "Battery Draining Quickly" },
    { key: "camera_malfunction", label: "Camera Not Working" },
    { key: "microphone_issues", label: "Microphone Issues" },
    { key: "speaker_issues", label: "Speaker Problems" },
    { key: "charging_port_damaged", label: "Charging Port Damaged" },
    { key: "water_damage", label: "Water/Liquid Damage" },
    { key: "overheating", label: "Device Overheating" },
    { key: "software_issues", label: "Software/OS Issues" },
    { key: "touch_id_not_working", label: "Touch ID Not Working" },
    { key: "face_id_not_working", label: "Face ID Not Working" },
    { key: "wifi_bluetooth_issues", label: "WiFi/Bluetooth Issues" },
    { key: "physical_damage", label: "Physical Damage" },
    { key: "keyboard_malfunction", label: "Keyboard Malfunction" },
    { key: "trackpad_issues", label: "Trackpad Issues" },
    { key: "display_issues", label: "Display Issues (Lines, Colors, Flickering)" },

];

// Warranty Status Options
export const WARRANTY_STATUS: ProductOption[] = [
    { key: "active", label: "Active Apple Warranty" },
    { key: "applecare_plus", label: "AppleCare+" },
    { key: "expired", label: "Expired" },
    { key: "unknown", label: "Unknown" },
];

// Contact Methods
export const CONTACT_METHODS: ProductOption[] = [
    { key: "email", label: "Email" },
    { key: "phone", label: "Phone Call" },
    { key: "sms", label: "SMS/Text Message" },
    { key: "whatsapp", label: "WhatsApp" },
];

// iPhone Models
export const IPHONE_MODELS: ModelOption[] = [
    { key: "iphone_15_pro_max", label: "iPhone 15 Pro Max", year: "2023" },
    { key: "iphone_15_pro", label: "iPhone 15 Pro", year: "2023" },
    { key: "iphone_15_plus", label: "iPhone 15 Plus", year: "2023" },
    { key: "iphone_15", label: "iPhone 15", year: "2023" },
    { key: "iphone_14_pro_max", label: "iPhone 14 Pro Max", year: "2022" },
    { key: "iphone_14_pro", label: "iPhone 14 Pro", year: "2022" },
    { key: "iphone_14_plus", label: "iPhone 14 Plus", year: "2022" },
    { key: "iphone_14", label: "iPhone 14", year: "2022" },
    { key: "iphone_13_pro_max", label: "iPhone 13 Pro Max", year: "2021" },
    { key: "iphone_13_pro", label: "iPhone 13 Pro", year: "2021" },
    { key: "iphone_13_mini", label: "iPhone 13 mini", year: "2021" },
    { key: "iphone_13", label: "iPhone 13", year: "2021" },
    { key: "iphone_12_pro_max", label: "iPhone 12 Pro Max", year: "2020" },
    { key: "iphone_12_pro", label: "iPhone 12 Pro", year: "2020" },
    { key: "iphone_12_mini", label: "iPhone 12 mini", year: "2020" },
    { key: "iphone_12", label: "iPhone 12", year: "2020" },
    { key: "iphone_se_3", label: "iPhone SE (3rd generation)", year: "2022" },
    { key: "iphone_se_2", label: "iPhone SE (2nd generation)", year: "2020" },
    { key: "iphone_11_pro_max", label: "iPhone 11 Pro Max", year: "2019" },
    { key: "iphone_11_pro", label: "iPhone 11 Pro", year: "2019" },
    { key: "iphone_11", label: "iPhone 11", year: "2019" },
    { key: "iphone_xs_max", label: "iPhone XS Max", year: "2018" },
    { key: "iphone_xs", label: "iPhone XS", year: "2018" },
    { key: "iphone_xr", label: "iPhone XR", year: "2018" },
    { key: "iphone_x", label: "iPhone X", year: "2017" },
    { key: "iphone_8_plus", label: "iPhone 8 Plus", year: "2017" },
    { key: "iphone_8", label: "iPhone 8", year: "2017" },
    { key: "iphone_7_plus", label: "iPhone 7 Plus", year: "2016" },
    { key: "iphone_7", label: "iPhone 7", year: "2016" },
    { key: "older", label: "Older iPhone Model" },
];

// iPad Models
export const IPAD_MODELS: ModelOption[] = [
    { key: "ipad_pro_13_m4", label: 'iPad Pro 13" (M4)', year: "2024" },
    { key: "ipad_pro_11_m4", label: 'iPad Pro 11" (M4)', year: "2024" },
    { key: "ipad_air_13_m2", label: 'iPad Air 13" (M2)', year: "2024" },
    { key: "ipad_air_11_m2", label: 'iPad Air 11" (M2)', year: "2024" },
    { key: "ipad_pro_12_9_gen6", label: 'iPad Pro 12.9" (6th gen, M2)', year: "2022" },
    { key: "ipad_pro_11_gen4", label: 'iPad Pro 11" (4th gen, M2)', year: "2022" },
    { key: "ipad_pro_12_9_gen5", label: 'iPad Pro 12.9" (5th gen, M1)', year: "2021" },
    { key: "ipad_pro_11_gen3", label: 'iPad Pro 11" (3rd gen, M1)', year: "2021" },
    { key: "ipad_air_gen5", label: "iPad Air (5th gen, M1)", year: "2022" },
    { key: "ipad_air_gen4", label: "iPad Air (4th gen)", year: "2020" },
    { key: "ipad_gen10", label: "iPad (10th generation)", year: "2022" },
    { key: "ipad_gen9", label: "iPad (9th generation)", year: "2021" },
    { key: "ipad_mini_gen6", label: "iPad mini (6th generation)", year: "2021" },
    { key: "older", label: "Older iPad Model" },
];

// MacBook Air Models
export const MACBOOK_AIR_MODELS: ModelOption[] = [
    { key: "mba_15_m3", label: '15" MacBook Air (M3)', year: "2024" },
    { key: "mba_13_m3", label: '13" MacBook Air (M3)', year: "2024" },
    { key: "mba_15_m2", label: '15" MacBook Air (M2)', year: "2023" },
    { key: "mba_13_m2", label: '13" MacBook Air (M2)', year: "2022" },
    { key: "mba_13_m1", label: '13" MacBook Air (M1)', year: "2020" },
    { key: "mba_13_2020", label: '13" MacBook Air (Intel, 2020)' },
    { key: "mba_13_2019", label: '13" MacBook Air (2019)' },
    { key: "mba_13_2018", label: '13" MacBook Air (Retina, 2018)' },
    { key: "older", label: "Older MacBook Air" },
];

// MacBook Pro Models
export const MACBOOK_PRO_MODELS: ModelOption[] = [
    { key: "mbp_16_m3_max", label: '16" MacBook Pro (M3 Max)', year: "2023" },
    { key: "mbp_16_m3_pro", label: '16" MacBook Pro (M3 Pro)', year: "2023" },
    { key: "mbp_14_m3_max", label: '14" MacBook Pro (M3 Max)', year: "2023" },
    { key: "mbp_14_m3_pro", label: '14" MacBook Pro (M3 Pro)', year: "2023" },
    { key: "mbp_14_m3", label: '14" MacBook Pro (M3)', year: "2023" },
    { key: "mbp_16_m2_max", label: '16" MacBook Pro (M2 Max)', year: "2023" },
    { key: "mbp_16_m2_pro", label: '16" MacBook Pro (M2 Pro)', year: "2023" },
    { key: "mbp_14_m2_max", label: '14" MacBook Pro (M2 Max)', year: "2023" },
    { key: "mbp_14_m2_pro", label: '14" MacBook Pro (M2 Pro)', year: "2023" },
    { key: "mbp_13_m2", label: '13" MacBook Pro (M2)', year: "2022" },
    { key: "mbp_16_m1_max", label: '16" MacBook Pro (M1 Max)', year: "2021" },
    { key: "mbp_16_m1_pro", label: '16" MacBook Pro (M1 Pro)', year: "2021" },
    { key: "mbp_14_m1_max", label: '14" MacBook Pro (M1 Max)', year: "2021" },
    { key: "mbp_14_m1_pro", label: '14" MacBook Pro (M1 Pro)', year: "2021" },
    { key: "mbp_13_m1", label: '13" MacBook Pro (M1)', year: "2020" },
    { key: "mbp_16_2019", label: '16" MacBook Pro (Intel, 2019)' },
    { key: "mbp_13_2020", label: '13" MacBook Pro (Intel, 2020)' },
    { key: "older", label: "Older MacBook Pro" },
];

// iMac Models
export const IMAC_MODELS: ModelOption[] = [
    { key: "imac_24_m3", label: '24" iMac (M3)', year: "2023" },
    { key: "imac_24_m1", label: '24" iMac (M1)', year: "2021" },
    { key: "imac_27_2020", label: '27" iMac (Retina 5K, 2020)' },
    { key: "imac_27_2019", label: '27" iMac (Retina 5K, 2019)' },
    { key: "imac_21_5_2019", label: '21.5" iMac (2019)' },
    { key: "imac_pro", label: 'iMac Pro 27"' },
    { key: "older", label: "Older iMac" },
];

// Mac mini Models
export const MAC_MINI_MODELS: ModelOption[] = [
    { key: "mac_mini_m2_pro", label: "Mac mini (M2 Pro)", year: "2023" },
    { key: "mac_mini_m2", label: "Mac mini (M2)", year: "2023" },
    { key: "mac_mini_m1", label: "Mac mini (M1)", year: "2020" },
    { key: "mac_mini_2018", label: "Mac mini (2018)" },
    { key: "older", label: "Older Mac mini" },
];

// Mac Studio Models
export const MAC_STUDIO_MODELS: ModelOption[] = [
    { key: "mac_studio_m2_ultra", label: "Mac Studio (M2 Ultra)", year: "2023" },
    { key: "mac_studio_m2_max", label: "Mac Studio (M2 Max)", year: "2023" },
    { key: "mac_studio_m1_ultra", label: "Mac Studio (M1 Ultra)", year: "2022" },
    { key: "mac_studio_m1_max", label: "Mac Studio (M1 Max)", year: "2022" },
];

// Mac Pro Models
export const MAC_PRO_MODELS: ModelOption[] = [
    { key: "mac_pro_m2_ultra", label: "Mac Pro (M2 Ultra)", year: "2023" },
    { key: "mac_pro_2019", label: "Mac Pro (2019, Intel)" },
    { key: "older", label: "Older Mac Pro" },
];

// Apple Watch Models
export const APPLE_WATCH_MODELS: ModelOption[] = [
    { key: "watch_ultra_2", label: "Apple Watch Ultra 2", year: "2023" },
    { key: "watch_series_9", label: "Apple Watch Series 9", year: "2023" },
    { key: "watch_ultra", label: "Apple Watch Ultra", year: "2022" },
    { key: "watch_series_8", label: "Apple Watch Series 8", year: "2022" },
    { key: "watch_se_2", label: "Apple Watch SE (2nd gen)", year: "2022" },
    { key: "watch_series_7", label: "Apple Watch Series 7", year: "2021" },
    { key: "watch_series_6", label: "Apple Watch Series 6", year: "2020" },
    { key: "watch_se", label: "Apple Watch SE (1st gen)", year: "2020" },
    { key: "watch_series_5", label: "Apple Watch Series 5", year: "2019" },
    { key: "watch_series_4", label: "Apple Watch Series 4", year: "2018" },
    { key: "watch_series_3", label: "Apple Watch Series 3", year: "2017" },
    { key: "older", label: "Older Apple Watch" },
];

// AirPods Models
export const AIRPODS_MODELS: ModelOption[] = [
    { key: "airpods_3", label: "AirPods (3rd generation)", year: "2021" },
    { key: "airpods_2", label: "AirPods (2nd generation)", year: "2019" },
    { key: "airpods_1", label: "AirPods (1st generation)", year: "2016" },
];

export const AIRPODS_PRO_MODELS: ModelOption[] = [
    { key: "airpods_pro_2", label: "AirPods Pro (2nd generation)", year: "2022" },
    { key: "airpods_pro_1", label: "AirPods Pro (1st generation)", year: "2019" },
];

export const AIRPODS_MAX_MODELS: ModelOption[] = [
    { key: "airpods_max", label: "AirPods Max", year: "2020" },
];

// Apple TV Models
export const APPLE_TV_MODELS: ModelOption[] = [
    { key: "apple_tv_4k_3", label: "Apple TV 4K (3rd generation)", year: "2022" },
    { key: "apple_tv_4k_2", label: "Apple TV 4K (2nd generation)", year: "2021" },
    { key: "apple_tv_4k_1", label: "Apple TV 4K (1st generation)", year: "2017" },
    { key: "apple_tv_hd", label: "Apple TV HD", year: "2015" },
    { key: "older", label: "Older Apple TV" },
];

// HomePod Models
export const HOMEPOD_MODELS: ModelOption[] = [
    { key: "homepod_2", label: "HomePod (2nd generation)", year: "2023" },
    { key: "homepod_mini", label: "HomePod mini", year: "2020" },
    { key: "homepod_1", label: "HomePod (1st generation)", year: "2018" },
];

// Accessories Models
export const MAGIC_KEYBOARD_MODELS: ModelOption[] = [
    { key: "magic_keyboard_touch_id", label: "Magic Keyboard with Touch ID" },
    { key: "magic_keyboard", label: "Magic Keyboard" },
    { key: "magic_keyboard_numeric", label: "Magic Keyboard with Numeric Keypad" },
];

export const MAGIC_MOUSE_MODELS: ModelOption[] = [
    { key: "magic_mouse_2", label: "Magic Mouse 2" },
    { key: "magic_mouse", label: "Magic Mouse" },
];

export const MAGIC_TRACKPAD_MODELS: ModelOption[] = [
    { key: "magic_trackpad_2", label: "Magic Trackpad 2" },
    { key: "magic_trackpad", label: "Magic Trackpad" },
];

export const APPLE_PENCIL_MODELS: ModelOption[] = [
    { key: "apple_pencil_2", label: "Apple Pencil (2nd generation)" },
    { key: "apple_pencil_1", label: "Apple Pencil (1st generation)" },
    { key: "apple_pencil_usbc", label: "Apple Pencil (USB-C)" },
];

export const BEATS_MODELS: ModelOption[] = [
    { key: "beats_studio_pro", label: "Beats Studio Pro" },
    { key: "beats_fit_pro", label: "Beats Fit Pro" },
    { key: "beats_studio_buds_plus", label: "Beats Studio Buds +" },
    { key: "beats_studio_buds", label: "Beats Studio Buds" },
    { key: "powerbeats_pro", label: "Powerbeats Pro" },
    { key: "beats_solo_3", label: "Beats Solo 3 Wireless" },
    { key: "beats_studio_3", label: "Beats Studio 3 Wireless" },
    { key: "other", label: "Other Beats Product" },
];

// Product Models Map
export const PRODUCT_MODELS: Record<ProductType, ModelOption[]> = {
    iphone: IPHONE_MODELS,
    ipad: IPAD_MODELS,
    macbook_air: MACBOOK_AIR_MODELS,
    macbook_pro: MACBOOK_PRO_MODELS,
    imac: IMAC_MODELS,
    mac_mini: MAC_MINI_MODELS,
    mac_studio: MAC_STUDIO_MODELS,
    mac_pro: MAC_PRO_MODELS,
    apple_watch: APPLE_WATCH_MODELS,
    airpods: AIRPODS_MODELS,
    airpods_pro: AIRPODS_PRO_MODELS,
    airpods_max: AIRPODS_MAX_MODELS,
    apple_tv: APPLE_TV_MODELS,
    homepod: HOMEPOD_MODELS,
    magic_keyboard: MAGIC_KEYBOARD_MODELS,
    magic_mouse: MAGIC_MOUSE_MODELS,
    magic_trackpad: MAGIC_TRACKPAD_MODELS,
    apple_pencil: APPLE_PENCIL_MODELS,
    beats: BEATS_MODELS,
    other: [{ key: "unknown", label: "Please specify in description" }],
};