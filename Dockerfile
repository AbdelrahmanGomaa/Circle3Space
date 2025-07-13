# المرحلة الأولى: بناء المشروع (Build)
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# نسخ جميع ملفات المشروع إلى مجلد العمل داخل الحاوية
COPY . .

# الانتقال إلى المجلد الفرعي الذي يحتوي على ملف المشروع csproj
WORKDIR /src/circle3coworkingspace

# تنفيذ عملية النشر (publish) للملف الصحيح في مجلد مشترك
RUN dotnet publish "circle3coworkingspace.csproj" -c Release -o /src/publish

# المرحلة الثانية: إعداد بيئة التشغيل (Runtime)
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app

# نسخ الملفات المنشورة من مرحلة البناء إلى مجلد العمل في بيئة التشغيل
COPY --from=build /src/publish .

# تحديد نقطة الدخول لتشغيل التطبيق
ENTRYPOINT ["dotnet", "circle3coworkingspace.dll"]
