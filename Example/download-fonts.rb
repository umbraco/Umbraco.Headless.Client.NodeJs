require 'down'

BASE_URL = "https://umbraco.com"
FINAL_PATH = "/Users/askilada/code/Umbraco/express-example/public/fonts"

REG = /(\/dist\/fonts\/.+?)\)/

def get_urls
    File.open("tmp.css", "r") do |c|
        content = c.read

        matches = content.scan(REG)
        m = matches.flatten.map do |b|
            b = b.gsub('?#iefix', '')
            new_name = download_font_with_name(b)
            puts "#{b}\t->\t#{new_name}"
            [b, "/fonts/#{new_name}"]
        end

        p m

        m.each do |m|
            before = m.first
            after = m.last

            content = content.gsub(before, after)

        end

        puts ""
        puts "./tmp2.css generated"
        

        File.open("tmp2.css", "w") { |f| f.write content }

    end
end

def download_font_with_name(name)
    basename = File.basename(name)
    out_filename = "#{FINAL_PATH}/#{basename}"
    Down.download(
        "#{BASE_URL}#{name}",
        destination: out_filename
    )

    basename
end



get_urls