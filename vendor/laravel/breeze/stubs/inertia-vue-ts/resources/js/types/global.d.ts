import { PageProps as InertiaPageProps } from "@inertiajs/core";
// inertiajsおよびaxiosライブラリから必要な型をインポートします
import { AxiosInstance } from "axios";
// 'ziggy-js'からziggyRoute関数とそのConfig型をインポートします
import ziggyRoute, { Config as ZiggyConfig } from "ziggy-js";
// 現在のディレクトリからPageProps型をインポートします
import { PageProps as AppPageProps } from "./";

// カスタムプロパティと型を含むようにグローバルスコープを拡張します
declare global {
    // グローバルWindowオブジェクトにaxiosインスタンスを追加します
    interface Window {
        axios: AxiosInstance;
    }

    // 指定された型のグローバル変数routeおよびZiggyを宣言します
    var route: typeof ziggyRoute;
    var Ziggy: ZiggyConfig;
}

// カスタムプロパティを含むように'vue'モジュールを拡張します
declare module "vue" {
    interface ComponentCustomProperties {
        route: typeof ziggyRoute; // Vueコンポーネントのカスタムプロパティにroute関数を追加します
    }
}

// カスタムPagePropsを含むように'@inertiajs/core'モジュールを拡張します
declare module "@inertiajs/core" {
    // InertiaPagePropsとAppPagePropsを単一の型にマージしてPagePropsを作成します
    interface PageProps extends InertiaPageProps, AppPageProps {}
}
