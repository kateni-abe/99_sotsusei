<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddMobileAndTelephoneToUserDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('user_details', function (Blueprint $table) {
            $table->string('mobile_number')->nullable()->after('line_id');  // 携帯番号
            $table->boolean('mobile_number_public')->default(false)->after('mobile_number');  // 携帯番号の公開/非公開フラグ
            $table->string('telephone_number')->nullable()->after('mobile_number_public');  // 電話番号（固定電話など）
            $table->boolean('telephone_number_public')->default(false)->after('telephone_number');  // 電話番号の公開/非公開フラグ
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('user_details', function (Blueprint $table) {
            $table->dropColumn('mobile_number');
            $table->dropColumn('mobile_number_public');
            $table->dropColumn('telephone_number');
            $table->dropColumn('telephone_number_public');
        });
    }
}